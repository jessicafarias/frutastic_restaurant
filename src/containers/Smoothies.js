import Smoothie from '../components/Smoothie';
import smoothiesList from '../constants/smoothies';

const Smoothies = () => (
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

export default Smoothies;
