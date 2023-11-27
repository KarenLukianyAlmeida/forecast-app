import { icons } from '../data/forecast';
import { DayWeatherProps } from '../types/weather';

const formatDate = (date:string) => {
  const newDate = new Date(date);

  const day = newDate.getDate();
  const month = newDate.getMonth();

  const months = [
    'jan', 'fev', 'mar', 'apr',
    'may', 'jun', 'jul', 'ago',
    'sep', 'out', 'nov', 'dez',
  ];

  return `${months[month]} ${day}`;
};

function DayWeather({ date, view, maxTemp, minTemp }: DayWeatherProps) {
  return (
    <div style={ { padding: '1rem' } }>
      <p>{formatDate(date)}</p>
      <img src={ icons[view] } alt={ view } />
      <p>{view}</p>
      <p>
        {minTemp}
        -
        {maxTemp}
        °C
      </p>
    </div>
  );
}

export default DayWeather;
