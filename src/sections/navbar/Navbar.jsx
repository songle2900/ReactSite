import Logo from '../../assets/react_logo.png';
import data from './data';
import { IoColorWand } from 'react-icons/io5';
import { useModalContext } from '../../context/modal-context';
import './navbar.css';

const Navbar = () => {
  const { showModalHandler } = useModalContext();
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
        <button id="theme__icon" onClick={showModalHandler}>
          <IoColorWand />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
