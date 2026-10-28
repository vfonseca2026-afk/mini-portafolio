import { FiUser } from 'react-icons/fi'

export default function SobreMi() {
  return (
    <section className="section">
      <div className="container about">
        <div className="placeholder about__photo"><FiUser /></div>
        <div className="about__content">
          <h1>Sobre mí</h1>
          <p>
            Soy [Tu Nombre], estudiante de Ingeniería Civil Informática. Me
            apasiona el desarrollo web y me interesa crear soluciones
            tecnológicas que mejoren la experiencia de las personas.
          </p>

          <h2>¿Qué estudio?</h2>
          <p>
            Estudio Ingeniería Civil Informática en el Instituto Tecnológico
            de la Universidad Católica de Temuco.
          </p>

          <h2>¿Qué me interesa?</h2>
          <ul>
            <li>Desarrollo web y tecnologías frontend</li>
            <li>Aprender nuevas herramientas y frameworks</li>
            <li>Construir proyectos que generen un impacto real</li>
          </ul>
        </div>
      </div>
    </section>
  )
}