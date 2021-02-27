import Juice from '../components/Juice';

const Juices = () => {
  const JuicesList = [{
    id: 1,
    name: 'QUEMAGRASA',
    description: 'Piña, pepino, apio, espinaca, perejil, naranja, jengibre',
    color: '#d33737',
    precio: 35,
  },
  {
    id: 2,
    name: 'REVITALIZANTE',
    description: 'Naranja, betabel, zanahoria, jengibre',
    color: '#d33737',
    precio: 35,
  },
  {
    id: 3,
    name: 'QUITANTOJOS',
    description: 'Naranja, toronja, papaya, jengibre',
    color: '#d33737',
    precio: 35,
  },
  {
    id: 4,
    name: 'NARANJADA',
    description: '100% jugo natural, hecho al momento',
    color: '#d33737',
    precio: 35,
  }];
  return (
    <div>
      <p className="title">Jugos</p>
      <p className="subtitle w-100">PREPARADO AL MOMENTO</p>
      {JuicesList.map(juice => (
        <Juice
          key={juice.id}
          juice={juice}
        />
      ))}
    </div>
  );
};

export default Juices;
