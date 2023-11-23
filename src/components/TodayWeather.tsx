type TodayWeatherProps = {
  day: string;
  date: string;
  condition: string;
  icon: string;
  min: number;
  max: number;
};

function TodayWeather({ day, date, condition, icon, min, max }:TodayWeatherProps) {
  return (
    <div>
      <h2>{ day }</h2>
      <p>{ date }</p>
      <img src={ icon } alt="" />
      <h2>{ condition }</h2>
      <p>
        { min }
        {' '}
        -
        {' '}
        { max }
        °C
      </p>
    </div>
  );
}

export default TodayWeather;
