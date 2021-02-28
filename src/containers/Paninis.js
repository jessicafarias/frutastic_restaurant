import Basic from '../components/Basic';

const Paninis = () => {
  const PaninisList = [{
    id: 5, description: 'El pan de tu preferencia, con una base de zanahoria y betabel rallado, pechuga de pavo, queso manchego, láminas de tomate, aguacate y nuestro aderezo casero', precio: 55, name: 'ORIGINAL',
  }];
  return (
    <div>
      <div className="title">Paninos</div>
      <p className="subtitle w-100 p-1">TODOS ACOMPANADOS CON NUESTRO MIX DE LECHUGAS Y AMARANTO.ELIGE TU PAN PREFERIDO EN CUALQUIER VARIEDAD (PAN DE SEMILLAS O PAN BAGUETTE INTEGRAL)</p>
      {PaninisList.map(panino => (
        <Basic
          key={panino.id}
          product={panino}
        />
      ))}
    </div>
  );
};

export default Paninis;
