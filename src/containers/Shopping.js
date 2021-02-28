import React from 'react';
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

import { removeProductAction, addProductAction } from '../actions';

const Shopping = props => {
  const { products } = props;

  const handleAddProduct = product => {
    const { addProduct } = props;
    addProduct(product);
  };

  const handleRemoveBook = product => {
    const { removeProduct } = props;
    removeProduct(product);
  };

  // const filteredBooks = books.filter(book => (
  //  !!((filtered === null || filtered === book.category))));

  return (
    <div>
      <Smoothies updateShopping={handleAddProduct} />
      <Juices updateShopping={handleAddProduct} />
      <Frappes updateShopping={handleAddProduct} />
      <Licuados updateShopping={handleAddProduct} />
      <Daiquiris updateShopping={handleAddProduct} />
      <Salads updateShopping={handleAddProduct} />
      <Avocados updateShopping={handleAddProduct} />
      <Paninis updateShopping={handleAddProduct} />
      <div>
        {products.map(product => (
          <Product
            key={product.name}
            product={product}
            delete={handleRemoveBook}
          />
        ))}
      </div>
    </div>
  );
};
Shopping.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.number,
    quatity: PropTypes.number,
  })).isRequired,
  addProduct: PropTypes.func.isRequired,
  removeProduct: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  products: state.products,
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
