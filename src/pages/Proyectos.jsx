import TarjetaProyecto from '../components/TarjetaProyecto';

function Proyectos() {
  const listaProyectos = [
    {
      id: 1,
      titulo: 'Mini Portafolio React',
      descripcion: 'Sitio web personal desarrollado con React, React Router y Vite.',
      enlace: 'https://github.com/tu-usuario/mini-portafolio',
    },
    {
      id: 2,
      titulo: 'API Backend FastAPI',
      descripcion: 'Desarrollo de API con contratos de respuesta estandarizados.',
      enlace: 'https://github.com/tu-usuario/repositorio-backend',
    },
  ];

  return (
    <section>
      <h2>Mis Proyectos</h2>
      <div className="contenedor-proyectos">
        {listaProyectos.map((proy) => (
          <TarjetaProyecto
            key={proy.id}
            titulo={proy.titulo}
            descripcion={proy.descripcion}
            enlace={proy.enlace}
          />
        ))}
      </div>
    </section>
  );
}

export default Proyectos;