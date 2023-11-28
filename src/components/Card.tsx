/* eslint-disable jsx-a11y/control-has-associated-label */
import DayWeather from './DayWeather';
import City from './City';
import { forecasts } from '../data/forecast';
import btn from '../assets/btn.svg';
import './Card.css';

function Card() {
  const eventHandler = (target: any) => console.log(target);
  return (
    <div className="card_container">
      <City>
        <h2>New York</h2>
      </City>
      <hr />
      <div className="wheather_container">
        {forecasts.map((forecast) => (
          <DayWeather
            key={ forecast.date }
            { ...forecast }
          />
        ))}
      </div>
      <button onClick={ (e) => eventHandler(e.target) }>
        <img src={ btn } alt="button" />
      </button>
    </div>
  );
}

export default Card;
