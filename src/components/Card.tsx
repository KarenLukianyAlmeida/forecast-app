import DayWeather from './DayWeather';
import City from './City';
import { forecasts } from '../data/forecast';

const styleDiv = {
  backgroundColor: '#1d2837',
  color: 'white',
  borderRadius: '16px',
  padding: '1rem',
};

function Card() {
  const cityName = 'Maringá';
  const bestCity = ['BH', 'Londres', 'Barcelona'];

  return (
    <div style={ styleDiv }>
      <City>
        <h2>{cityName}</h2>
      </City>
      {bestCity.includes(cityName) ? <h5>The best city</h5> : <h5>A ordinary city</h5>}
      <hr />
      <div style={ { display: 'flex' } }>
        {forecasts.map((forecast) => (
          <DayWeather
            key={ forecast.date }
            { ...forecast }
          />
        ))}
      </div>
    </div>
  );
}

export default Card;
