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
import { removeProductAction, addProductAction } from '../actions';
import Classic from './Classic';
import Logo from '../assets/logomenu.png';

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
    setTotal(total - product.price);
  };

  return (
    <div className="pb-5">
      <div>
        <div className="d-flex justify-content-center align-items-center p-2">
          <img src={Logo} alt="logo" className="logo_menu" />
        </div>
        <h1 className="w-100 text-center instructions">
          AGREGA TUS PRODUCTOS UTILIZANDO EL BOTON (+). AL FINAL PODRÁS
          {' '}
          <a href="#bootom" className="link_bottom">ENVIAR TU LISTA</a>
          {' '}
          POR WHATSAPP
        </h1>
      </div>
      <div className="row">
        <div className="col-sm-12 col-lg-6">
          <Smoothies updateShopping={handleAddProduct} />
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
            deleteproduct={handleRemoveBook}
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
          <div className="btn_style btn-efect d-flex justify-content-start align-items-center">
            <p className="pr-3">ENVIAR POR</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              width="48px"
              height="48px"
            >
              <linearGradient id="k87TA_gnBJ8uBlK4qfs8ia" x1="6.718" x2="35.097" y1="12.801" y2="41.18" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#dfe9f2" />
                <stop offset=".391" stopColor="#d6e0e9" />
                <stop offset="1" stopColor="#bfc8d1" />
              </linearGradient>
              <path
                fill="url(#k87TA_gnBJ8uBlK4qfs8ia)"
                d="M37.848,9.86C34.073,6.083,29.052,4.002,23.709,4C12.693,4,3.727,12.962,3.722,23.979
                c-0.001,3.367,0.849,6.685,2.461,9.622L3.598,43.04c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297
                c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98
                C43.698,18.656,41.621,13.636,37.848,9.86z"
              />
              <linearGradient
                id="k87TA_gnBJ8uBlK4qfs8ib"
                x1="15.389"
                x2="28.863"
                y1="10.726"
                y2="39.265"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stopColor="#2ecc75" />
                <stop offset="1" stopColor="#0b964a" />
              </linearGradient>
              <path
                fill="url(#k87TA_gnBJ8uBlK4qfs8ib)"
                d="M34.871,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774
                c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006
                c8.698,0,15.777-7.077,15.78-15.776C39.49,19.778,37.851,15.814,34.871,12.832z"
              />
              <path
                d="M28.893,33.879c-0.995,0-2.354-0.254-5.087-1.331c-3.06-1.208-6.066-3.83-8.464-7.384l-0.077-0.113
                c-0.642-0.857-2.132-3.107-2.132-5.5c0-2.58,1.288-3.953,1.838-4.54l0.085-0.091C15.815,14.089,16.709,14,17.058,14
                c0.369,0.004,0.682,0,0.953,0.012c0.654,0.026,1.399,0.215,1.936,1.409l0,0c0.25,0.558,0.676,1.605,1.009,2.426
                c0.213,0.527,0.386,0.955,0.439,1.069c0.294,0.586,0.308,1.167,0.036,1.714l-0.065,0.133c-0.128,0.262-0.261,0.533-0.544,0.863
                l-0.235,0.282c-0.162,0.197-0.325,0.393-0.47,0.545c0.389,0.641,1.206,1.856,2.331,2.86c1.394,1.241,2.588,1.76,3.229,2.039
                c0.127,0.055,0.233,0.102,0.317,0.142c0.405-0.47,1.072-1.271,1.302-1.614c0.77-1.156,1.877-0.755,2.24-0.622
                c0.569,0.206,3.323,1.576,3.35,1.589l0.255,0.125c0.419,0.203,0.813,0.394,1.062,0.808c0.395,0.661,0.176,2.073-0.193,3.105
                c-0.534,1.503-2.828,2.805-4.054,2.915l-0.226,0.024C29.465,33.855,29.196,33.879,28.893,33.879z M17.216,16
                c-0.14,0-0.385-0.058-0.686,0.27l-0.101,0.109c-0.453,0.483-1.297,1.383-1.297,3.172c0,1.843,1.326,3.757,1.732,4.3
                c0.027,0.036,0.071,0.101,0.135,0.194c2.175,3.223,4.853,5.582,7.541,6.642c3.384,1.335,4.253,1.234,4.956,1.151l0.278-0.03
                c0.609-0.055,2.122-0.951,2.351-1.594c0.209-0.585,0.276-1.087,0.287-1.374c-0.044-0.021-0.092-0.043-0.143-0.067l-0.283-0.139
                c-0.637-0.32-2.779-1.366-3.131-1.495c-0.442,0.608-1.262,1.565-1.479,1.814c-0.407,0.467-1.127,0.909-2.229,0.354
                c-0.066-0.033-0.156-0.071-0.268-0.12c-0.691-0.301-2.13-0.926-3.763-2.38c-1.469-1.311-2.474-2.904-2.838-3.529
                c-0.445-0.761-0.322-1.495,0.366-2.18c0.12-0.12,0.257-0.291,0.397-0.46l0.262-0.314c0.118-0.137,0.161-0.226,0.267-0.441
                l0.035-0.071c-0.092-0.204-0.278-0.659-0.502-1.213c-0.323-0.797-0.736-1.815-0.979-2.357v0c-0.065-0.144-0.114-0.215-0.138-0.245
                c0.005,0.015-0.029,0.016-0.058,0.014C17.706,16,17.463,16,17.216,16z M32.407,28.615L32.407,28.615L32.407,28.615z M19.642,19.736 L19.642,19.736L19.642,19.736z"
                opacity=".05"
              />
              <path
                d="M28.889,33.384c-0.846,0-2.155-0.22-4.899-1.302c-2.967-1.17-5.891-3.727-8.233-7.198l-0.087-0.128
                c-0.616-0.822-2.037-2.962-2.037-5.206c0-2.382,1.193-3.654,1.703-4.198l0.089-0.096c0.625-0.683,1.351-0.756,1.634-0.756
                c0.377,0.003,0.667,0,0.931,0.012c0.492,0.02,1.057,0.124,1.502,1.114l0,0c0.249,0.554,0.671,1.594,1.001,2.409
                c0.225,0.555,0.405,1.002,0.452,1.097c0.082,0.165,0.338,0.674,0.039,1.275l-0.067,0.136c-0.125,0.255-0.233,0.476-0.475,0.758
                L20.2,21.59c-0.173,0.21-0.346,0.419-0.496,0.569c-0.216,0.215-0.216,0.215-0.13,0.362c0.328,0.563,1.232,1.998,2.541,3.165
                c1.453,1.295,2.696,1.834,3.363,2.124c0.144,0.062,0.259,0.113,0.344,0.156c0.293,0.146,0.323,0.116,0.427-0.002
                c0.288-0.328,1.168-1.364,1.463-1.807c0.554-0.83,1.269-0.57,1.654-0.431c0.506,0.184,3.039,1.437,3.296,1.566l0.262,0.128
                c0.38,0.184,0.68,0.329,0.852,0.614c0.254,0.426,0.149,1.603-0.235,2.681c-0.488,1.371-2.646,2.497-3.628,2.585l-0.239,0.026
                C29.441,33.354,29.196,33.384,28.889,33.384z M17.201,15.5c-0.026,0-0.052,0-0.078,0c-0.183,0-0.595,0.031-0.962,0.432l-0.097,0.104
                c-0.465,0.496-1.432,1.528-1.432,3.514c0,1.943,1.281,3.864,1.832,4.6c0.025,0.033,0.064,0.09,0.121,0.174
                c2.231,3.306,4.991,5.73,7.772,6.828c3.505,1.382,4.445,1.271,5.197,1.183l0.267-0.029c0.693-0.062,2.451-1.013,2.776-1.925
                c0.333-0.932,0.347-1.71,0.296-1.877c0.007,0.006-0.232-0.098-0.405-0.182l-0.276-0.136c-0.623-0.313-2.806-1.381-3.188-1.52
                c-0.36-0.13-0.361-0.133-0.48,0.046c-0.349,0.521-1.32,1.657-1.542,1.91c-0.642,0.735-1.384,0.359-1.629,0.236
                c-0.072-0.036-0.171-0.078-0.293-0.131c-0.668-0.291-2.057-0.895-3.63-2.296c-1.416-1.262-2.387-2.803-2.739-3.407
                c-0.476-0.814,0.059-1.347,0.287-1.574c0.13-0.13,0.28-0.313,0.431-0.497l0.255-0.306c0.159-0.186,0.226-0.322,0.336-0.547
                l0.07-0.143c0.049-0.098,0.058-0.189-0.04-0.383c-0.052-0.104-0.245-0.578-0.483-1.167c-0.326-0.803-0.741-1.829-0.987-2.374l0,0
                c-0.229-0.509-0.363-0.515-0.632-0.525C17.717,15.5,17.461,15.5,17.201,15.5z"
                opacity=".07"
              />
              <path
                fill="#fff"
                fillRule="evenodd"
                d="M19.035,15.831c-0.355-0.79-0.729-0.806-1.068-0.82
                C17.69,14.999,17.374,15,17.058,15s-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956s1.7,4.59,1.937,4.906
                c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255
              c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543
              c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119
              c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968
              c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831
              C20.379,19.115,19.457,16.769,19.035,15.831z"
                clipRule="evenodd"
              />
            </svg>
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
