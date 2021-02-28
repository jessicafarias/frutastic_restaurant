import Simple from '../components/Simple';

const Frappes = () => {
  const FrappeList = [{ id: 1, name: 'FRAPUCCINO', precio: 10 }, { id: 2, name: 'MOCKACCINO', precio: 10 }];
  return (
    <div>
      <p className="title">Frappes</p>
      <p className="subtitle w-75 m-auto">ELIGE EL ENDULZANTE Y LECHE DE TU PREFERENCIA</p>
      <div className="p-3">
        {FrappeList.map(frappe => (
          <Simple
            key={frappe.id}
            product={frappe}
          />
        ))}
      </div>
    </div>
  );
};

export default Frappes;
