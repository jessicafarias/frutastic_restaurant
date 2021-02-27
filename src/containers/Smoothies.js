import Smoothie from '../components/Smoothie';

const Smoothies = () => {
  const smoothiesList = [{
    id: 1,
    description: 'Manzana, betabel, pera, espinaca, perejil, jengibre, platano, chía pudding, rodajas de kiwi y topping de granola con amaranto',
    color: '#B0347E',
    nombre: 'RUBIO',
  },
  {
    id: 2,
    description: 'Piña, mango, jengibre, coco, plátano, chía pudding, rodajas de kiwi y topping de granola con amaranto',
    color: '#66b034',
    nombre: 'PÚRPURA',
  }];
  return (
    <div>
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
