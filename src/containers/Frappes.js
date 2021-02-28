import PropTypes from 'prop-types';
import Basic from '../components/Basic';

const Frappes = props => {
  const { updateShopping } = props;
  const FrappeList = [{ id: 1, name: 'FRAPUCCINO', precio: 10 }, { id: 2, name: 'MOCKACCINO', precio: 10 }];
  return (
    <div>
      <p className="title">Frappes</p>
      <p className="subtitle w-75 m-auto">ELIGE EL ENDULZANTE Y LECHE DE TU PREFERENCIA</p>
      <div className="p-3">
        {FrappeList.map(frappe => (
          <Basic
            key={frappe.id}
            product={frappe}
            updateShopping={updateShopping}
          />
        ))}
      </div>
    </div>
  );
};

Frappes.propTypes = {
  updateShopping: PropTypes.func.isRequired,
};

export default Frappes;
