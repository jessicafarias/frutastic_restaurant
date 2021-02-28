import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Product from '../components/product';
import Smoothies from './Smoothies';
import Juices from './Juices';
import Frappes from './Frappes';
import Licuados from './Licuados';
import Daiquiris from './Daiquiris';
import Salads from './Salads';
import Avocados from './Avocados';
import Paninis from './Paninis';
import '../styles/shopping.css';
import '../styles/style.scss';

import { removeProductAction, addProductAction } from '../actions';

const Shopping = props => {
  const { products, url } = props;

  const [total, setTotal] = useState(0);

  const handleAddProduct = product => {
    const { addProduct } = props;
    addProduct(product);
    setTotal(total + product.precio);
  };

  const handleRemoveBook = product => {
    const { removeProduct } = props;
    removeProduct(product);
  };

  return (
    <div className="pb-5">
      <Smoothies updateShopping={handleAddProduct} />
      <Juices updateShopping={handleAddProduct} />
      <Frappes updateShopping={handleAddProduct} />
      <Licuados updateShopping={handleAddProduct} />
      <Daiquiris updateShopping={handleAddProduct} />
      <Salads updateShopping={handleAddProduct} />
      <Avocados updateShopping={handleAddProduct} />
      <Paninis updateShopping={handleAddProduct} />

      <div className="seleccionados"> Productos seleccionados: </div>
      <div>
        {products.map(product => (
          <Product
            key={product.name}
            product={product}
            delete={handleRemoveBook}
          />
        ))}
      </div>

      <div className="subtotal">
        <p className="text_subtotal">
          $
          {total}
        </p>
      </div>

      <p className="subtitle">
        TOTAL :$
        {total}
      </p>

      <a href={url} target="_blank" rel="noreferrer">
        <div className="btn_style btn-efect">
          HACER PEDIDO
        </div>
      </a>

    </div>
  );
};
Shopping.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    precio: PropTypes.number,
    quatity: PropTypes.number,
  })).isRequired,
  addProduct: PropTypes.func.isRequired,
  removeProduct: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  products: state.products,
  url: state.url,
});

const mapDispatchToProps = dispatch => ({
  removeProduct: book => {
    dispatch(removeProductAction(book));
  },
  addProduct: category => {
    dispatch(addProductAction(category));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Shopping);
