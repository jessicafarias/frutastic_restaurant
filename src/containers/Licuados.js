import PropTypes from 'prop-types';
import Basic from '../components/Basic';

const Licuados = props => {
  const { updateShopping } = props;
  const LicuadosList = [{
    id: 1,
    name: 'NATURAL',
    precio: 10,
    description: 'Canela , leche y avena',
  },
  {
    id: 2,
    name: 'LICUADO PERSONALIZADO',
    precio: 10,
    description: 'elige hasta 2 frutas : plátano, fresa, mango, piña, melón, papaya, guayaba, manzana',
  }];
  return (
    <div>
      <p className="title">Licuados</p>
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
