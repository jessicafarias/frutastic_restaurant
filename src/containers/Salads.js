import PropTypes from 'prop-types';
import Basic from '../components/Basic';
import BCarousel from '../components/BCarousel';
import SaladsList from '../constants/Salads';
import SaladImages from '../ImagesList/SalladImages';

const Salads = props => {
  const { updateShopping } = props;
  return (
    <div>
      <p className="title">Ensaladas</p>
      <p className="subtitle w-75 m-auto">AGREGA PORCION DE PECHUGA ESPECIADA A LA PLANCHA POR $15</p>
      {SaladsList.map(salad => (
        <Basic
          key={salad.id}
          product={salad}
          updateShopping={updateShopping}
        />
      ))}
      <BCarousel ImagesList={SaladImages} />
    </div>
  );
};

Salads.propTypes = {
  updateShopping: PropTypes.func.isRequired,
};

export default Salads;
