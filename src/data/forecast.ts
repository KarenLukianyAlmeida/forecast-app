import cloudy from '../assets/cloudy_color.png';
import heavyRain from '../assets/heavy_rain_color.png';
import lightRain from '../assets/light_rain_color.png';
import lightning from '../assets/lightning.png';
import rainbow from '../assets/rainbow_color.png';
import sunCloudy from '../assets/sun_cloudy_color.png';
import sunny from '../assets/sunny_color.png';
import storm from '../assets/thunderstorm_color .png';
import { DayWeatherProps } from '../types/weather';

export const icons = {
  cloudy,
  heavyRain,
  lightRain,
  lightning,
  rainbow,
  sunCloudy,
  sunny,
  storm,
};

export const forecasts: DayWeatherProps[] = [
  {
    date: '2023-11-23T16:22:11',
    view: 'sunny',
    maxTemp: 20,
    minTemp: 15,
  },
  {
    date: '2023-11-24T16:22:11',
    view: 'rainbow',
    maxTemp: 20,
    minTemp: 15,
  },
  {
    date: '2023-11-25T16:22:11',
    view: 'lightRain',
    maxTemp: 20,
    minTemp: 15,
  },
  {
    date: '2023-11-26T16:22:11',
    view: 'sunCloudy',
    maxTemp: 20,
    minTemp: 15,
  },
];
