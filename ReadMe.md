# NASA Mission Control App

This project is a couple of a react frontend application and a nodejs express backend application.

This application is used to schedule missions to one of the Kepler Exoplanets in search of life.

## How it works

Based on data and criteria provided by exoplanetarchive, we're able to get a list of habitable planets from the kepler_data.csv file and with the help of the mission control app, we can schedule launches to these planets and observe them. lol yeah.

## Architecture

The frontend and backend app can be located in the `NASA MISSION CONTROL` folder (client and server folders respectively).
The frontend is a react app that renders the layout and make http calls to the backend.
The backend is a Nodejs express server that exposes endpoints needed for the Mission Control App to work.

## Server Technology

The server has been designed to host the frontend, instead of having two different application running, the frontend will be deployed and moved to the server's public directory.

The folder has been exposed by express static middleware, and the `index.html` file will handle all routes that aren't `/planets` or `/launches`.

CORS is enabled for `http://localhost:3000` just incase you try to run the frontend application separately.

Morgan logger has been enabled for logging our requests to console.

## How to run

- run `npm install` to install all dependencies for both client and server.
- Use `npm run server` to run the server application
- Use `npm run client` to run the frontend application
- Use `npm run watch` to run the server and frontend application concurrently
- Use `npm run deploy` to build the client app, move it to the server directory and then start the server application.

For deployment, you can access the frontend via `http://localhost:8000/`

https://exoplanetarchive.ipac.caltech.edu/docs/KeplerMission.html
