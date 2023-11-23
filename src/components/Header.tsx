type HeaderProps = {
  title: string;
  color: string;
};

function Header({ title, color = 'transparent' }:HeaderProps) {
  return (
    <header style={ { backgroundColor: color, padding: '1rem' } }>
      <h1>{ title }</h1>
      <hr />
    </header>
  );
}

export default Header;
