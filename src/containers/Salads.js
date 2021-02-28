import PropTypes from 'prop-types';
import Basic from '../components/Basic';
import SaladsList from '../constants/Salads';

const Salads = props => {
  const { updateShopping } = props;
  return (
    <div>
      <p className="title">Ensaladas</p>
      <p className="subtitle w-75 m-auto">AGREGA PORCION DE PECHUGA ESPECIADA A LA PLANCHA POR $20</p>
      {SaladsList.map(salad => (
        <Basic
          key={salad.id}
          product={salad}
          updateShopping={updateShopping}
        />
      ))}
    </div>
  );
};

Salads.propTypes = {
  updateShopping: PropTypes.func.isRequired,
};

export default Salads;
