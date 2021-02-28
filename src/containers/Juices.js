import Juice from '../components/Juice';
import JuicesList from '../constants/juices';

const Juices = () => (
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

export default Juices;
