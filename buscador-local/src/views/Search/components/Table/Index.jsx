export default function Table({ dataFiltrada, isUp }) {
  const table = dataFiltrada.map((item) => {
    return (
      <tr key={item.id}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.username}</td>
        <td>{item.email}</td>
        <td>{item.phone}</td>
      </tr>
    );
  });

  return (
    <div>
      <table >
        <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Usuario</th>
          <th>Email</th>
          <th>Telefono</th>
        </tr>
        </thead>
        <tbody>
        {isUp ? table : null}
        </tbody>
      </table>
    </div>
  );
}
