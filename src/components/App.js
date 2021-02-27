import Daiquiris from '../containers/Daiquiris';
import Frappes from '../containers/Frappes';
import Juices from '../containers/Juices';
import Licuados from '../containers/Licuados';
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
    </>
  );
}

export default App;
