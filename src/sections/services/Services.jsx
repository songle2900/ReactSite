import Card from '../../components/Card';
import data from './data';
import './services.css';

const Services = () => {
  return (
    <section id="services">
      <h2>Services</h2>
      <p>I give you the best in all the services below</p>
      <div className="container services__container">
        {data.map((i) => {
          return (
            <Card key={i.id} className="service light">
              <div className="service__icon">{i.icon}</div>
              <div className="service__details">
                <h4>{i.title}</h4>
                <p>{i.desc}</p>
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
