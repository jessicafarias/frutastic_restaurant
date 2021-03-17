import PropTypes from 'prop-types';
import Basic from '../components/Basic';
import moka from '../assets/chocolateweb.jpg';

const Frappes = props => {
  const { updateShopping } = props;
  const FrappeList = [{
    id: 1,
    name: 'FRAPUCCINO',
    description: 'Café, chocolate líquido, crema batida y topping de granola con amaranto',
    precio: 49,
  },
  {
    id: 2,
    name: 'MOKACCINO',
    description: 'Café, cocoa Hersheys, chocolate líquido, crema batida y topping de granola con amaranto',
    precio: 49,
  }];
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
        <img src={moka} className="w-100" alt="mokaccino" />
      </div>
    </div>
  );
};

Frappes.propTypes = {
  updateShopping: PropTypes.func.isRequired,
};

export default Frappes;
