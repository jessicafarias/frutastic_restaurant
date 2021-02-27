import Smoothie from '../components/Smoothie';

const Smoothies = () => {
  const smoothiesList = [{ id: 1, description: 'description here', color: '#B0347E' }];
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
