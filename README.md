# Overview

This project is a work-in-progress that was created so I could learn GraphQL and get more comfortable working with Express and Node. I'll probably use this project to continue learning new tools and libraries.
 
Right now there's not much functionality since I'm not sure what I actually want to do with the project but at the moment it will show you various hazards on a map (wildfires, tornados, volcanoes) and allow you to search for a location and get the nearby cities for that location. Clicking on a city will display more information about it.

In order to get the project working, you will need to create a .env file in the root folder and the client folder. The client .env file is for Google Maps API and the root folder key is for the RapidAPI key. The keys should be named like below.
1. REACT_APP_GOOGLE_MAPS_KEY (https://developers.google.com/maps/documentation/embed/get-api-key)
2. RAPID_API_KEY (https://rapidapi.com/wirefreethought/api/GeoDB%20Cities)

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Will start the client and server at the same time using concurrently.

### `npm start`

Runs the client at http://localhost:3000.

### `npm run server`

Runs the server. You can access GraphiQL at http://localhost:4000/graphql.
