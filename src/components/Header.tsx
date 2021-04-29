import { Link } from 'react-router-dom';

const Header = (): JSX.Element => {
  return (
    <header>
      <Link to="/">Home</Link>
      <Link to="/news">News</Link>
    </header>
  );
};

export default Header;
