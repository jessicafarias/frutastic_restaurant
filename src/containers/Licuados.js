import PropTypes from 'prop-types';
import Basic from '../components/Basic';

const Licuados = props => {
  const { updateShopping } = props;
  const LicuadosList = [{
    id: 1,
    name: 'NATURAL',
    precio: 30,
    description: 'Canela , leche y avena',
  },
  {
    id: 2,
    name: 'LICUADO PERSONALIZADO',
    precio: 30,
    description: 'elige hasta 2 frutas : plátano, fresa, mango, piña, melón, papaya, guayaba, manzana',
  }, {
    id: 5,
    name: 'MALTEADA DE FRESA',
    description: 'Malteada de fresas naturales acompada con jalea de frutos rojos, crema batida y topping de granola y amaranto',
    precio: 49,
  },
  {
    id: 6,
    name: 'MALTEADA DE FRESA CON CHOCOLATE',
    description: 'Malteada de fresa natural acompada con chocolate liquido Hersheys, crema batida y topping de granola y amaranto',
    precio: 49,
  },
  {
    id: 7,
    name: 'MALTEADA DE MANGO',
    description: 'Malteada de mango acompañada de jalea de mango, crema batida y topping de granola con amaranto',
    precio: 49,
  }];
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
