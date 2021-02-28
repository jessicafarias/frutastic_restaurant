import Basic from '../components/Basic';

const Avocados = () => {
  const AvocadoList = [{
    id: 5, description: 'El sabor natural del Aguacate Hass en su punto, sal-pimentado y puesto sobre pan de semillas tostado al momento. Se acompaña con mix de lechugas y tomate con amaranto.', precio: 55, name: 'ORO VERDE',
  }];
  return (
    <div>
      <div className="title">Avocado</div>
      {AvocadoList.map(avocado => (
        <Basic
          key={avocado.id}
          product={avocado}
        />
      ))}
    </div>
  );
};

export default Avocados;
