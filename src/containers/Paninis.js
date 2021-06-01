import PropTypes from 'prop-types';
import Basic from '../components/Basic';
import PaninisList from '../constants/paninos';
import BCarousel from '../components/BCarousel';
import FoodImages from '../ImagesList/FoodImages';

const Paninis = props => {
  const { updateShopping } = props;
  return (
    <div>
      <div className="title">Paninos</div>
      <p className="subtitle w-100 p-1">TODOS ACOMPANADOS CON NUESTRO MIX DE LECHUGAS Y AMARANTO.ELIGE TU PAN PREFERIDO EN CUALQUIER VARIEDAD (PAN DE SEMILLAS O PAN BAGUETTE INTEGRAL)</p>
      {PaninisList.map(panino => (
        <Basic
          key={panino.id}
          product={panino}
          updateShopping={updateShopping}
        />
      ))}
      <BCarousel ImagesList={FoodImages} />
    </div>
  );
};

Paninis.propTypes = {
  updateShopping: PropTypes.func.isRequired,
};

export default Paninis;
