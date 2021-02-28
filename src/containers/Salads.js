import Basic from '../components/Basic';

const Salads = () => {
  const SaladsList = [{
    id: 1,
    name: 'PERLA Y LUNA',
    precio: 10,
    chamoy: 'block',
    color: 'white',
    image: 'perla',
    description: 'Cubitos de naranja y toronja, láminas de fresa, y kiwi, sobre frescas lechugas y espinacas. Espolvoreado con amaranto y chía. Aderezo aparte',
  }, {
    id: 2,
    name: 'TEDDY',
    precio: 10,
    color: 'yellow',
    image: 'rollitos',
    description: 'Rollitos de pechuga de pavo, queso manchego holandés, rollitos de pepino verde y tomate saladet, sobre mezcla de lechugas y espinacas. Espolvoreado con amaranto y chia. Aderezo de la casa a parte',
  }];
  return (
    <div>
      <p className="title">Ensaladas</p>
      <p className="subtitle w-75 m-auto">AGREGA PORCION DE PECHUGA ESPECIADA A LA PLANCHA POR $20</p>
      {SaladsList.map(salad => (
        <Basic
          key={salad.id}
          product={salad}
        />
      ))}
    </div>
  );
};

export default Salads;
