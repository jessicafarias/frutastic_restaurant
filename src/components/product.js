import PropTypes from 'prop-types';
import '../styles/shopping.css';

const Product = props => {
  const { product, deleteproduct } = props;
  return (
    <div className="row justify-content-center align-items-center">
      <p className="item w-100 col-9">
        {product.quantity}
        {'. '}
        {product.name}
        {product.precio}
      </p>
      <div className="col-3">
        <button type="submit" className="btn-remove" onClick={() => { deleteproduct(product); }}>-</button>
      </div>
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
  deleteproduct: PropTypes.func.isRequired,
};

export default Product;
