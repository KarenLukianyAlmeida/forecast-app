type CityProps = {
  children: React.ReactNode;
};

function City({ children }: CityProps) {
  return <div>{children}</div>;
}

export default City;
