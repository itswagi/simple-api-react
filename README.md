# Getting Started with this Assignment

## Deployed Version
Access the deployed frontend on (https://kt-assignment.herokuapp.com)
This is deployed on Heroku

## Running the Project

1. Clone the repo and perform a `yarn install` to instal all package dependencies.
2. Add a .env file in the root directory. Setup an environment variable called REACT_APP_SERVER_URL with the api link appended with /artists. i.e. www.link.com/artists/. Setup a variable called REACT_APP_API_ID with your API_ID
3. Use the `yarn start` script to start up the application

## Directory Structure
1. `src` contains all the required components
2. `components` contains all reuseable components
3. `router` contains main level pages
4. `state` contains your context store
5. `utils` contains all helper functions and constants required throughout the app
6. `__test__` contains unit tests for all the components

## Naming Convention

1. Files are named according to their main responsibility

## Future Features
1. Use Router to update url as user moves between layouts. Will allow user to then copy paste a link and get results immediately
2. Add animations on layout shifts

