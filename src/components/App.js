import Avocados from '../containers/Avocados';
import Daiquiris from '../containers/Daiquiris';
import Frappes from '../containers/Frappes';
import Juices from '../containers/Juices';
import Licuados from '../containers/Licuados';
import Paninis from '../containers/Paninis';
import Salads from '../containers/Salads';
import Smoothies from '../containers/Smoothies';
import '../styles/App.css';

function App() {
  return (
    <>
      <Smoothies />
      <Juices />
      <Frappes />
      <Licuados />
      <Daiquiris />
      <Salads />
      <Avocados />
      <Paninis />
    </>
  );
}

export default App;
