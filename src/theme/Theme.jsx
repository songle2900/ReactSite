import Modal from '../components/Modal';
import PrimaryColor from './PrimaryColor';
import { primaryColors, backgroundColors } from './data';
import BackgroundColor from './BackgroundColor';
import './theme.css';

const Theme = () => {
  return (
    <Modal className="theme__modal">
      <h3>Customize Colour</h3>
      <small>
        Change the primary and background colour to your preference.
      </small>
      <div className="theme__primary-wrapper">
        <h5>Primary Colour</h5>
        <div className="theme__primary-colors">
          {primaryColors.map((pColor) => (
            <PrimaryColor key={pColor.className} className={pColor.className} />
          ))}
        </div>
      </div>
      <div className="theme__background-wrapper">
        <h5>Background Colour</h5>
        <div className="theme__background-colors">
          {backgroundColors.map((bColor) => (
            <BackgroundColor
              key={bColor.className}
              className={bColor.className}
            />
          ))}
        </div>
      </div>
    </Modal>
  );
};

export default Theme;
