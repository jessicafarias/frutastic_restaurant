import PropTypes from 'prop-types';
import SliderT from '../components/AvocadoSlide';
import Basic from '../components/Basic';
import AvocadoList from '../constants/avocados';

const Avocados = props => {
  const { updateShopping } = props;

  return (
    <div>
      <div className="title">Avocado toast</div>
      {AvocadoList.map(avocado => (
        <Basic
          key={avocado.id}
          product={avocado}
          updateShopping={updateShopping}
        />
      ))}
      <div className="w-100">
        <SliderT />
      </div>
    </div>
  );
};

Avocados.propTypes = {
  updateShopping: PropTypes.func.isRequired,
};
export default Avocados;
