import PropTypes from 'prop-types';
import Daiquiri from '../components/daiquiri';
import DaiquiriList from '../constants/daiquiris';

const Daiquiris = props => {
  const { updateShopping } = props;
  return (
    <div>
      <p className="title">Daiquiris</p>
      <p className="subtitle w-75 m-auto">BEBIDA FROZEN A BASE DE PULPA DE FRUTA, TAJIN, CHAMOY LIQUIDO CON BANDERILLA DE TAMARINDO</p>
      <div className="row">
        {DaiquiriList.map(d => (
          <Daiquiri
            key={d.id}
            daiquiri={d}
            updateShopping={updateShopping}
          />
        ))}
      </div>
    </div>
  );
};

Daiquiris.propTypes = {
  updateShopping: PropTypes.func.isRequired,
};

export default Daiquiris;
