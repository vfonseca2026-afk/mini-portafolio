import { Link } from 'react-router-dom'
import { FiCode, FiMonitor, FiUsers, FiStar, FiImage } from 'react-icons/fi'

const destacados = [
  { icono: <FiCode />, texto: 'Desarrollo Frontend' },
  { icono: <FiMonitor />, texto: 'Proyectos Reales' },
  { icono: <FiUsers />, texto: 'Aprendizaje Continuo' },
  { icono: <FiStar />, texto: 'Compromiso y Pasión' },
]

export default function Inicio() {
  return (
    <>
      <section className="hero">
        <div className="container hero__inner">
          <div className="hero__text">
            <h1>Hola, soy Tu Nombre</h1>
            <h2>Desarrollador/a Frontend</h2>
            <p>
              Bienvenido a mi portafolio. Aquí puedes conocer más sobre mí,
              mis habilidades y proyectos.
            </p>
            <Link to="/proyectos" className="btn">Explorar</Link>
          </div>
          <div className="placeholder hero__img"><FiImage /></div>
        </div>
      </section>

      <section className="section">
        <div className="container features">
          {destacados.map(({ icono, texto }) => (
            <div className="feature" key={texto}>
              {icono}
              <p>{texto}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}