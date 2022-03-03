
import sun from '../assets/sun.png'
import rain from '../assets/rain.png'
import cloud from '../assets/cloud.png'
import wind from '../assets/wind.png'
import storm from '../assets/storm.png'

const iconMapping = (weatherCode: number):{image: string, name: string} => {
  // mapping from https://open-meteo.com/en/docs#weathervariables
  // The API resturns a number that can be mapped to an image
  switch (weatherCode) {
    case 0:
      return {image: sun, name: 'sunny'}
    case 1:
    case 2:
    case 3:
      return {image: cloud, name: 'clouds'}
    case 45:
    case 48:
      return {image: wind, name: 'windy'}
    case 95:
    case 96:
    case 99:
      return {image: storm, name: 'thunder storms'}
    default:
        // This could be extended to have a lot more images,
        // rain is the most common, so I am using the default for now
      return {image: rain, name: 'rain'}
  }
}

export default iconMapping
