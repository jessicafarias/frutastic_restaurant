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
  /*
  const handleRemoveBook = product => {
    const { removeProduct } = props;
    removeProduct(product);
  };

  const handleUpdateBook = book => {
    const { addProduct } = props;
    addProduct(product);
  };
*/
  // const filteredBooks = books.filter(book => (
  //  !!((filtered === null || filtered === book.category))));

  return (
    <div>
      <Smoothies />
      <Juices />
      <Frappes />
      <Licuados />
      <Daiquiris />
      <Salads />
      <Avocados />
      <Paninis />
      <div>
        {products.map(product => (
          <Product
            key={product.id}
            product={product}
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
};
/*
  removeProduct: PropTypes.func.isRequired,
  addProduct: PropTypes.func.isRequired,
*/

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
