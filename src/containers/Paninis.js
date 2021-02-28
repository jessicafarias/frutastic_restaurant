import Basic from '../components/Basic';

const Paninis = () => {
  const PaninisList = [{
    id: 5, description: 'El pan de tu preferencia, con una base de zanahoria y betabel rallado, pechuga de pavo, queso manchego, láminas de tomate, aguacate y nuestro aderezo casero', precio: 55, name: 'ORIGINAL',
  }];
  return (
    <div>
      <div className="title">Avocado</div>
      {PaninisList.map(panino => (
        <Basic
          key={avocado.id}
          product={panino}
        />
      ))}
    </div>
  );
};

export default Paninis;
