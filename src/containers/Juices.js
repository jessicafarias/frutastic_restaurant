import PropTypes from 'prop-types';
import Juice from '../components/Juice';
import JuicesList from '../constants/juices';

const Juices = props => {
  const { updateShopping } = props;
  return (
    <div>
      <p className="title">Jugos</p>
      <p className="subtitle w-100">PREPARADO AL MOMENTO</p>
      {JuicesList.map(juice => (
        <Juice
          key={juice.id}
          juice={juice}
          updateShopping={updateShopping}
        />
      ))}
    </div>
  );
};

Juices.propTypes = {
  updateShopping: PropTypes.func.isRequired,
};

export default Juices;
