import PropTypes from 'prop-types';
import Basic from '../components/Basic';
import LicuadosList from '../constants/licuados';

const Licuados = props => {
  const { updateShopping } = props;
  return (
    <div>
      <p className="title">Licuados y malteadas</p>
      <p className="subtitle w-75 m-auto">ELIGE EL ENDULZANTE Y LECHE DE TU PREFERENCIA</p>
      <div className="p-3">
        {LicuadosList.map(frappe => (
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

Licuados.propTypes = {
  updateShopping: PropTypes.func.isRequired,
};

export default Licuados;
