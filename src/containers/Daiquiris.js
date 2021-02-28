import Daiquiri from '../components/daiquiri';

const Daiquiris = () => {
  const DaiquiriList = [{
    id: 1, name: 'FRAPUCCINO', precio: 10, chamoy: 'block', color: 'white',
  }, {
    id: 2, name: 'MOCKACCINO', precio: 10, color: 'yellow',
  }];
  return (
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
};

export default Daiquiris;
