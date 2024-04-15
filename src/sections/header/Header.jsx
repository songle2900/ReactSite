import HeaderImage from '../../assets/EricSong.jpg';
import data from './data';
import './header.css';

const Header = () => {
  return (
    <header id="header">
      <div className="container header__container">
        <div className="header__profile">
          <img src={HeaderImage} className="headerImage" alt="Header" />
        </div>
        <h3>Eric Youngmin Song</h3>
        <p>
          You are a click away from building your dream website or web app. Send
          me the deatils of your project for a modern, mobile responsive, highly
          performant website today!
        </p>
        <div className="header__cta">
          <a href="#contact" className="btn primary">
            Let's Talk
          </a>
          <a href="#portfolio" className="btn light">
            Portfolio
          </a>
        </div>
        <div className="header__socials">
          {data.map((i) => {
            return (
              <a
                key={i.id}
                href={i.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {i.icon}
              </a>
            );
          })}
        </div>
      </div>
    </header>
  );
};

export default Header;
