import './City.css';

type CityProps = {
  children: React.ReactNode;
};

function City({ children }: CityProps) {
  return <div className="container-geographic">{children}</div>;
}

export default City;
