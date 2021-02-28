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
import '../styles/shopping.css';
import '../styles/style.scss';

import { removeProductAction, addProductAction } from '../actions';

const Shopping = props => {
  const { products, url } = props;

  const handleAddProduct = product => {
    const { addProduct } = props;
    addProduct(product);
  };

  const handleRemoveBook = product => {
    const { removeProduct } = props;
    removeProduct(product);
  };
  /*
  const handleSendMessage = message => {
    products.map(product => {
      products.concat(`%0D%0A${product.id}.${product.name}`);
    });
    MessageToSend.concat
    ('%0D%0A%0D%0AEn+un+momento+le+mando+la+ubicaci%C3%B3n+y+una+referencia.
    %0D%0A%C2%A1Muchas+gracias%21');
  };

  // const filteredBooks = books.filter(book => (
  //  !!((filtered === null || filtered === book.category))));
*/
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

      <div className="subtotal">
        <p>100</p>
      </div>
      <p className="subtotoal">{url}</p>
      <a href={url} target="_blank" rel="noreferrer">
        {/* btn btn-primary btn-pedir */}
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
    price: PropTypes.number,
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
