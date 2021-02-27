import Smoothie from '../components/Smoothie';

const Smoothies = () => {
  const smoothiesList = [{
    id: 1,
    description: 'Manzana, betabel, pera, espinaca, perejil, jengibre, platano, chía pudding, rodajas de kiwi y topping de granola con amaranto',
    color: '#B0347E',
    nombre: 'RUBIO',
    precio: 55,
  },
  {
    id: 2,
    description: 'Piña, mango, jengibre, coco, plátano, chía pudding, rodajas de kiwi y topping de granola con amaranto',
    color: '#66b034',
    nombre: 'PÚRPURA',
    precio: 55,
  },
  {
    id: 3,
    description: 'Papaya, melón, zanahoria, plátano, miel de abeja, chía pudding, rodajas de kiwi y topping de granola con amaranto',
    color: '#D68A61',
    nombre: 'CORAL',
    precio: 55,
  },
  {
    id: 4,
    description: 'Manzana, pera, melón, plátano, miel de abeja, chía pudding, rodajas de kiwi y topping de granola con amaranto',
    color: '#FFFFFF',
    nombre: 'ÁLBO',
    precio: 55,
  }];

  return (
    <div>
      <div className="d-flex flex-column align-items-center">
        <div className="d-flex flex-row align-items-end p-0 pr-4 mr-4">
          <p className="title">Smoothies</p>
          <p className="subtitle p-2"> 600ML</p>
        </div>
        <p className="nicecream">Nicecream</p>
        <p className="subtitle w-100">EL DESAYUNO COMPLETO EN UN VASO</p>
      </div>
      {smoothiesList.map(smoothie => (
        <Smoothie
          key={smoothie.id}
          smoothie={smoothie}
        />
      ))}
    </div>
  );
};

export default Smoothies;
