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
import WafflesList from '../constants/Waffles';
import OmeletteList from '../constants/omelettes';
import daiquiris from '../assets/daiquiris.png';
import Slider from '../components/Slider';
import { removeProductAction, addProductAction } from '../actions';
import Classic from './Classic';

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
      <div className="row">
        <div className="col-sm-12 col-lg-6">
          <Smoothies updateShopping={handleAddProduct} />
          <Slider />
        </div>
        <div className="col-sm-12 col-lg-6">
          <Juices updateShopping={handleAddProduct} />
        </div>
      </div>

      <div className="row">
        <div className="col-sm-12 col-lg-5">
          <Frappes updateShopping={handleAddProduct} />
          <Licuados updateShopping={handleAddProduct} />
        </div>
        <div className="col-sm-12 col-lg-6">
          <Daiquiris updateShopping={handleAddProduct} />
          <div className="d-flex">
            <img className="m-auto" src={daiquiris} alt="par daiquiris" />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-12 col-lg-6">
          <Salads updateShopping={handleAddProduct} />
          <Avocados updateShopping={handleAddProduct} />
        </div>
        <div className="col-sm-12 col-lg-6">
          <Paninis updateShopping={handleAddProduct} />
          <Classic
            title="Waffles"
            subtitle="RECETA ESPECIAL DE LA CASA PARA WAFFLES CRUJIENTES POR FUERA SUAVES POR DENTRO"
            List={WafflesList}
            updateShopping={handleAddProduct}
          />
          <Classic
            title="Omelettes"
            List={OmeletteList}
            updateShopping={handleAddProduct}
          />
        </div>
      </div>

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

      <a href="#bootom">
        <div className="subtotal">
          <p className="text_subtotal">
            $
            {total}
          </p>
        </div>
      </a>

      <section id="bootom" href={url}>
        <p className="subtitle">
          TOTAL :$
          {total}
        </p>
        <a href={url} target="_blank" rel="noreferrer">
          <div className="btn_style btn-efect">
            HACER PEDIDO
          </div>
        </a>
      </section>

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
