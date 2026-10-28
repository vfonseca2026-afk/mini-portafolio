function Habilidades() {
  const habilidadesTecnicas = [
    { id: 1, nombre: 'JavaScript / React', nivel: 'Intermedio' },
    { id: 2, nombre: 'Python / FastAPI', nivel: 'Intermedio' },
    { id: 3, nombre: 'SQL / MySQL', nivel: 'Intermedio' },
  ];

  const herramientas = ['Git', 'GitHub', 'VS Code', 'Vite'];

  return (
    <section>
      <h2>Mis Habilidades</h2>
      <ul>
        {habilidadesTecnicas.map((hab) => (
          <li key={hab.id}>
            <strong>{hab.nombre}</strong> - {hab.nivel}
          </li>
        ))}
      </ul>

      <h2>Herramientas</h2>
      <ul>
        {herramientas.map((herr, index) => (
          <li key={index}>{herr}</li>
        ))}
      </ul>
    </section>
  );
}

export default Habilidades;