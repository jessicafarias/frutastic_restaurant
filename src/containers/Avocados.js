import PropTypes from 'prop-types';
import Basic from '../components/Basic';
import AvocadoList from '../constants/avocados';

const Avocados = props => {
  const { updateShopping } = props;

  return (
    <div>
      <div className="title">Avocado</div>
      {AvocadoList.map(avocado => (
        <Basic
          key={avocado.id}
          product={avocado}
          updateShopping={updateShopping}
        />
      ))}
    </div>
  );
};

Avocados.propTypes = {
  updateShopping: PropTypes.func.isRequired,
};
export default Avocados;
