import Logo from '../../assets/logo.jpg';
import data from './data';
import { IoColorWand } from 'react-icons/io5';
import './navbar.css';

const Navbar = () => {
  return (
    <nav>
      <div className="container nav__container">
        <a href="index.html" className="nav__logo">
          <img src={Logo} alt="Logo" />
        </a>
        <ul className="nav__menu">
          {data.map((i) => (
            <li key={i.id}>
              <a href={i.link}>{i.title}</a>
            </li>
          ))}
        </ul>
        <button id="theme__icon">
          <IoColorWand />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
