import Daiquiri from '../components/daiquiri';
import DaiquiriList from '../constants/daiquiris';

const Daiquiris = () => (
  <div>
    <p className="title">Daiquiris</p>
    <p className="subtitle w-75 m-auto">BEBIDA FROZEN A BASE DE PULPA DE FRUTA, TAJIN, CHAMOY LIQUIDO CON BANDERILLA DE TAMARINDO</p>
    <div className="row">
      {DaiquiriList.map(d => (
        <Daiquiri
          key={d.id}
          daiquiri={d}
        />
      ))}
    </div>
  </div>
);

export default Daiquiris;
