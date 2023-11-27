export type ViewTipes =
'sunny' |
'storm' |
'sunCloudy' |
'cloudy' |
'lightRain' |
'rainbow' |
'lightning' |
'heavyRain';

export type DayWeatherProps = {
  date: string;
  view: ViewTipes;
  maxTemp: number;
  minTemp: number;
};
