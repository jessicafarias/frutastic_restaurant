import Basic from '../components/Basic';
import AvocadoList from '../constants/avocados';

const Avocados = () => (
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

export default Avocados;
