import Smoothie from '../components/Smoothie'
const Smoothies = () => {
  const smoothies_list= [{id:1, description:'description here', color: '#B0347E'}]
  return (
    <div>
      {smoothies_list.map(smoothie => (
          <Smoothie
            key={smoothie.id}
            smoothie={smoothie}
          />
        ))}
    </div>
  );
}

export default Smoothies;