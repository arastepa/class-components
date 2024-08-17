import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <ul>
      <li>
        <Link to="./controlled">controlled input</Link>
      </li>
      <li>
        <Link to="./uncontrolled">uncontrolled input</Link>
      </li>
    </ul>
  );
};

export default Header;
