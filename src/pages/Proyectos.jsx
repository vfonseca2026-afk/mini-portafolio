import TarjetaProyecto from '../components/TarjetaProyecto'

const proyectos = [
  {
    titulo: 'Gestor de Tareas Kanban',
    descripcion:
      'Aplicación web para la gestión de tareas con metodología Kanban. Desarrollada con React, TypeScript y Tailwind CSS.',
    url: '#',
  },
  {
    titulo: 'Portafolio Personal',
    descripcion:
      'Sitio web personal para mostrar mis habilidades y proyectos. Desarrollado con React y React Router.',
    url: '#',
  },
]

export default function Proyectos() {
  return (
    <section className="section">
      <div className="container">
        <h1>Mis Proyectos</h1>
        <p className="section__subtitle">
          Algunos de los proyectos en los que he trabajado.
        </p>
        <div className="projects">
          {proyectos.map((p) => (
            <TarjetaProyecto key={p.titulo} {...p} />
          ))}
        </div>
      </div>
    </section>
  )
}