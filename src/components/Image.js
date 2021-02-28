import PropTypes from 'prop-types';
import perla from '../assets/perla.png';
import rollitos from '../assets/rollitos.png';
import citrica from '../assets/citrica.png';

const Image = props => {
  const { url } = props;

  switch (url) {
    case 'perla':
      return <img className="w-50" src={perla} alt="perla" />;
    case 'rollitos':
      return <img className="w-50" src={rollitos} alt="rollito" />;
    case 'citrica':
      return <img className="w-50" src={citrica} alt="citrica" />;
    default:
      return <span />;
  }
};

Image.propTypes = {
  url: PropTypes.string,
};

Image.defaultProps = {
  url: '',
};

export default Image;
