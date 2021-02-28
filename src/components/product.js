import PropTypes from 'prop-types';
import '../styles/shopping.css';

const Product = props => {
  const { product } = props;
  return (
    <div>
      <p className="item w-100">
        {product.quantity}
        {'. '}
        {product.name}
      </p>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    description: PropTypes.string,
    name: PropTypes.string,
    precio: PropTypes.number,
    quantity: PropTypes.number,
  }).isRequired,
};

export default Product;
