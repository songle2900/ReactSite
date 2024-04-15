import AboutImage from '../../assets/1665797388238.jpg';
import CV from '../../assets/cv.pdf';
import { HiDownload } from 'react-icons/hi';
import data from './data';
import Card from '../../components/Card';
import './about.css';

const About = () => {
  return (
    <section id="about">
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
            <img src={AboutImage} alt="About" />
          </div>
        </div>
        <div className="about__right">
          <h2>About Me</h2>
          <div className="about__cards">
            {data.map((i) => (
              <Card key={i.id} className="about__card">
                <span className="about__card-icon">{i.icon}</span>
                <h5>{i.title}</h5>
                <small>{i.desc}</small>
              </Card>
            ))}
          </div>
          <p>
            - Highly self-motivated and detail-oriented individual with time
            management skill <br />
            - Proficient under high stressed environments and well-organized
            problem solving skill <br />
            - Proficient in React.js for front-end development <br />
            - Experienced in project management and team integration <br />-
            Understanding of Agile methodologies like Scrum
          </p>
          <a href={CV} download className="btn primary">
            Download CV <HiDownload />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
