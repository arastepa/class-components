import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <ul>
      <li>
        <Link to="./">Main</Link>
      </li>
      <li>
        <Link to="./hookform">React Hook Form</Link>
      </li>
      <li>
        <Link to="./uncontrolled">uncontrolled input</Link>
      </li>
    </ul>
  );
};

export default Header;
