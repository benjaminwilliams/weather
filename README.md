# Weather

A simple weather widget

## Getting started

built using node version 17

1. Clone repository `git clone https://github.com/benjaminwilliams/weather.git`
2. run `npm install`
3. run `npm start`

tests can be run wih `npm run test`

## Features

* Type the name of any city to get the 7 day forecast
* Select from imperial or metric temperature units
* Responsive design

## Limitations
* I have kept the styling generic.
* Loading and Error states are being handled, but could be extended for more details and styling
* The weather API I am using does not have some features e.g. pollen

## Future improvements / to do
* The app shows the 7 day forecast, but not details for tdoay. 
* The getLocation service returns geo data back to the view component, before passing the data to the getWeather.
  * This should be chained within the service, the view should not be a middle man
* Styling is very barebones
  * ~~style for specific device types to ensure it looks good~~
  * ~~add global styles to make inputs, headers etc look better~~
* ~~all imports include file extensions. This should be removed, but there is a config issue with webpack I have not had time to figure out.~~

## Resources
* Weather API from [Open Metro](https://open-meteo.com)
      'https://geocoding-api.open-meteo.com/v1/search?name=abcdefg'
* Weather icons from  [Icons8](https://icons8.com)
* Created with [Create React App](https://create-react-app.dev/)
