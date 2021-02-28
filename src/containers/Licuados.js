import Basic from '../components/Basic';

const Licuados = () => {
  const LicuadosList = [{ id: 1, name: 'FRAPUCCINO', precio: 10 }, { id: 2, name: 'MOCKACCINO', precio: 10 }];
  return (
    <div>
      <p className="title">Licuados</p>
      <p className="subtitle w-75 m-auto">ELIGE EL ENDULZANTE Y LECHE DE TU PREFERENCIA</p>
      <div className="p-3">
        {LicuadosList.map(frappe => (
          <Basic
            key={frappe.id}
            product={frappe}
          />
        ))}
      </div>
    </div>
  );
};

export default Licuados;
