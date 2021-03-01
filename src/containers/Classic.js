import PropTypes from 'prop-types';
import Basic from '../components/Basic';

const Classic = props => {
  const {
    updateShopping, List, title, subtitle,
  } = props;

  return (
    <div>
      <div className="title">{title}</div>
      <div className="subtitle">{subtitle}</div>
      {List.map(product => (
        <Basic
          key={product.id}
          product={product}
          updateShopping={updateShopping}
        />
      ))}
    </div>
  );
};

Classic.propTypes = {
  List: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    description: PropTypes.string,
    name: PropTypes.string,
    precio: PropTypes.number,
    image: PropTypes.string,
  })).isRequired,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  updateShopping: PropTypes.func.isRequired,
};

Classic.defaultProps = {
  title: null,
  subtitle: null,
};

export default Classic;
