import PropTypes from 'prop-types';
import Basic from '../components/Basic';
import FrappeList from '../constants/frappes';
import BCarousel from '../components/BCarousel';
import FrappesImages from '../ImagesList/FrappesImages';

const Frappes = props => {
  const { updateShopping } = props;
  return (
    <div>
      <p className="title">Frappes y Lates</p>
      <p className="subtitle w-75 m-auto">ELIGE EL ENDULZANTE Y LECHE DE TU PREFERENCIA</p>
      <div className="p-3">
        {FrappeList.map(frappe => (
          <Basic
            key={frappe.id}
            product={frappe}
            updateShopping={updateShopping}
          />
        ))}
        <BCarousel ImagesList={FrappesImages} />
      </div>
    </div>
  );
};

Frappes.propTypes = {
  updateShopping: PropTypes.func.isRequired,
};

export default Frappes;
