const axios = require('axios');
require('dotenv').config();

const {
  GraphQLObjectType,
  GraphQLInt, 
  GraphQLString,
  GraphQLList,
  GraphQLSchema,
  GraphQLFloat,
} = require('graphql');

// Types ///////////////////////////////////////////////////
const GeometriesType = new GraphQLObjectType({
  name: 'Geometries',
  fields: () => ({
    date: { type: GraphQLString },
    lattitude: { 
      type: GraphQLFloat,
      resolve(parent) {
        if (Array.isArray(parent.coordinates[0])) {
          return null;
        }
        return parent.coordinates[0]
      }
    },
    longitude: { 
      type: GraphQLFloat,
      resolve(parent) {
        return parent.coordinates[1]
      }
    }
  })
})

const EventType = new GraphQLObjectType({
  name: 'Events',
  fields: () => ({
    id: { type: GraphQLString },
    title: { type: GraphQLString },
    category: { 
      type: GraphQLString,
      resolve(parent, args) {
        return parent.categories[0].title;
      }
    },
    geometries: { 
      type: GeometriesType,
      resolve(parent, args) {
        return parent.geometries[0];
      }
    }
  })
})

const CityType = new GraphQLObjectType({
  name: 'Cities',
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    regionCode: { type: GraphQLString }
  })
})

const CityDetails = new GraphQLObjectType({
  name: 'CityDetails',
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    population: { type: GraphQLInt },
    timezone: { type: GraphQLString },
    elevation: {
      type: GraphQLInt,
      resolve(parent) {
        return parent.elevationMeters;
      }
    }
  })
})

const TornadoType = new GraphQLObjectType({
  name: 'Tornados',
  fields: () => ({
    id: {
      type: GraphQLInt,
      resolve(parent) {
        return parent.attributes.OBJECTID;
      }
    },
    lattitude: {
      type: GraphQLFloat,
      resolve(parent) {
        return parent.attributes.slat;
      }  
    },
    longitude: {
      type: GraphQLFloat,
      resolve(parent) {
        return parent.attributes.slon;
      }
    },
    category: {
      type: GraphQLString,
      resolve() { 
        return 'Tornado';
      }
    }
  })
})


// Root Queries ///////////////////////////////////////////////////
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    Events: {
      type: new GraphQLList(EventType),
      resolve() {
        return axios
          .get('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events')
          .then(res => res.data.events)
          .catch(err => console.error(err));
      }
    },
    Tornados: {
      type: new GraphQLList(TornadoType),
      resolve() {
        return axios
          .get('https://services1.arcgis.com/Hp6G80Pky0om7QvQ/arcgis/rest/services/Historical_Tornado_Tracks/FeatureServer/0/query?where=yr%3D2012&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=OBJECTID%2Cyr%2Cmo%2Cslat%2Cslon%2Clen%2Cwid%2C&returnGeometry=true&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pjson')
          .then(res => {
            const data = res.data.features;
            // Get first 99 results for now
            return data.slice(0, 99);
          })
          .catch(err => console.error(err));
      }
    },
    Cities: {
      type: new GraphQLList(CityType),
      args: {
        location: { type: GraphQLString },
        radius: { type: GraphQLInt },
        types: { type: GraphQLString },
        minPopulation: { type: GraphQLInt }
      },
      resolve(parent, args) {
        return axios
          .request(cityOptions(args))
          .then(res => {
            return res.data.data;
          })
          .catch(err => console.error(err));
      }
    },
    CityDetails: {
      type: CityDetails,
      args: {
        id: { type: GraphQLString }
      },
      resolve(parent, args) {
        return axios
          .request(getCityData(args.id))
          .then(res => {
            return res.data.data;
          })
          .catch(err => console.error(err));
      }
    }
  }
})

const cityOptions = args => {
  const { location, radius, types, minPopulation } = args;
  return {
    method: 'GET',
    url: 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities',
    params: { location, radius, types, minPopulation },
    headers: {
      'x-rapidapi-key': `${process.env.RAPID_API_KEY}`,
      'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com'
    }
  }
};

const getCityData = id => ({
  method: 'GET',
  url: `https://wft-geo-db.p.rapidapi.com/v1/geo/cities/${id}`,
  headers: {
    'x-rapidapi-key': `${process.env.RAPID_API_KEY}`,
    'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com'
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});