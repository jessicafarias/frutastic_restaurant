import PropTypes from 'prop-types';

const Product = props => {
  const { product } = props;
  return (
    <div>
      <p className="subtitle w-100">{product.name}</p>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    description: PropTypes.string,
    name: PropTypes.string,
    precio: PropTypes.number,
  }).isRequired,
};

export default Product;
