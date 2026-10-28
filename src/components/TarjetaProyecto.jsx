import { FiImage, FiArrowRight } from 'react-icons/fi'

function TarjetaProyecto({ titulo, descripcion, enlace }) {
  return (
    <article className="project-card">
      <div className="placeholder project-card__img">
        <FiImage />
      </div>
      <div className="project-card__body">
        <h3>{titulo}</h3>
        <p>{descripcion}</p>
        {enlace ? (
          <a href={enlace} target="_blank" rel="noopener noreferrer" className="btn">
            Ver proyecto <FiArrowRight />
          </a>
        ) : (
          <span>Repositorio no disponible</span>
        )}
      </div>
    </article>
  )
}

export default TarjetaProyecto