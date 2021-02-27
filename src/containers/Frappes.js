import Simple from '../components/Simple';

const Frappes = () => {
  const FrappeList = [{ id: 1, name: 'FRAPUCCINO', precio: 10 }, { id: 1, name: 'MOCKACCINO', precio: 10 }];
  return (
    <div>
      <p className="title">Frappes</p>
      {FrappeList.map(frappe => (
        <Simple
          key={frappe.id}
          product={frappe}
        />
      ))}
    </div>
  );
};

export default Frappes;
