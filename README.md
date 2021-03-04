# Overview

This project is a work-in-progress that was created so I could learn GraphQl and get more comfortable working with Express and Node. Right now there's not much functionality since I'm not sure what I actually want to do with the project but at the moment it will show you various hazards on a map (wildfires, tornados, volcanoes) and allow you to search for a location and get the nearby cities for that location. Clicking on a city will display more information about it.

In order to get the project working, you will need to create a .env file in root folder. This will need to contain two api keys that you can get for free.
1. A Google Maps API key (https://developers.google.com/maps/documentation/embed/get-api-key)
2. An API key for GeoDB Cities (https://rapidapi.com/wirefreethought/api/GeoDB%20Cities)

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Will start the client and server at the same time using concurrently.

### `npm start`

Runs the client at http://localhost:3000.

### `npm run server`

Runs the server. You can access GraphiQL at http://localhost:4000/graphql.
