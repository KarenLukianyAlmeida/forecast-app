import TodayWeather from './TodayWeather';
import Header from './Header';
import sunny from '../assets/01_sunny_color.png';
import lightning from '../assets/lightning.png';

const style = {
  backgroundColor: '#1d2837',
  color: 'white',
  padding: '1rem',
  borderRadius: '8px',
};

const weatherData = [
  {
    day: 'Sun',
    date: 'Nov 23',
    condition: 'Sunny',
    icon: sunny,
    min: 15,
    max: 15,
  },
  {
    day: 'Mon',
    date: 'No 24',
    condition: 'Lightning',
    icon: lightning,
    min: 20,
    max: 25,
  },
  {
    day: 'Tue',
    date: 'No 25',
    condition: 'Sunny',
    icon: sunny,
    min: 10,
    max: 15,
  },
  {
    day: 'Wed',
    date: 'No 26',
    condition: 'Lightning',
    icon: lightning,
    min: 20,
    max: 25,
  },
];

function CardContainer() {
  return (
    <div style={ style }>
      <Header title="Previsão do Tempo" color="" />

      <div style={ { display: 'flex', gap: '1rem' } }>
        {
        weatherData.map((dia) => (
          <TodayWeather
            key={ dia.date }
            // day={ dia.day }
            // date={ dia.date }
            // condition={ dia.condition }
            // icon={ dia.icon }
            // min={ dia.min }
            // max={ dia.max }
            { ...dia }
          />
        ))
      }
      </div>
    </div>
  );
}

export default CardContainer;
