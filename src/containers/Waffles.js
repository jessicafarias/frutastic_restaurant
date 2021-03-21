import PropTypes from 'prop-types';
import Classic from './Classic';
import WafflesList from '../constants/Waffles';

const Waffles = ({ handleAddProduct }) => (
  <Classic
    title="Waffles"
    subtitle="RECETA ESPECIAL DE LA CASA PARA WAFFLES CRUJIENTES POR FUERA SUAVES POR DENTRO"
    List={WafflesList}
    updateShopping={handleAddProduct}
  />

);

Waffles.propTypes = {
  handleAddProduct: PropTypes.func.isRequired,
};

export default Waffles;
