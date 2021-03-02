import PropTypes from 'prop-types';
import Daiquiri from '../components/daiquiri';
import DaiquiriList from '../constants/daiquiris';
import daiquiris from '../assets/daiquiris.png';

const Daiquiris = props => {
  const { updateShopping } = props;
  return (
    <div>
      <p className="title">Daiquiris</p>
      <p className="subtitle w-75 m-auto">BEBIDA FROZEN A BASE DE PULPA DE FRUTA, TAJIN, CHAMOY LIQUIDO CON BANDERILLA DE TAMARINDO</p>
      <div className="col-12">
        <div className="row">
          {DaiquiriList.map(d => (
            <Daiquiri
              key={d.id}
              daiquiri={d}
              updateShopping={updateShopping}
            />
          ))}
        </div>
        <div className="d-flex">
          <img className="m-auto w-75 daiquiri_img" src={daiquiris} alt="par daiquiris" />
        </div>
      </div>
    </div>
  );
};

Daiquiris.propTypes = {
  updateShopping: PropTypes.func.isRequired,
};

export default Daiquiris;
