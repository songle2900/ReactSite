import { links, socials } from './data';
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="container footer__container">
        <ul className="nav__menu">
          {links.map((fl) => (
            <li key={fl.id}>
              <a href={fl.link}>{fl.title}</a>
            </li>
          ))}
        </ul>
        <div className="footer__socials">
          {socials.map((social) => (
            <a
              key={social.id}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
      <div className="footer__copyright">
        <small>2024 Eric Song &copy; All Right Reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
