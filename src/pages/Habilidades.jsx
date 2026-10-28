import { FaHtml5, FaCss3Alt, FaReact, FaPython } from 'react-icons/fa'
import { SiJavascript, SiTypescript } from 'react-icons/si'

const tecnologias = [
  { nombre: 'HTML', icono: <FaHtml5 />, nivel: 90 },
  { nombre: 'CSS', icono: <FaCss3Alt />, nivel: 85 },
  { nombre: 'JavaScript', icono: <SiJavascript />, nivel: 75 },
  { nombre: 'React', icono: <FaReact />, nivel: 70 },
  { nombre: 'TypeScript', icono: <SiTypescript />, nivel: 60 },
  { nombre: 'Python', icono: <FaPython />, nivel: 70 },
]

const herramientas = ['Git', 'GitHub', 'VS Code', 'Figma', 'Node.js']

export default function Habilidades() {
  return (
    <section className="section">
      <div className="container">
        <h1>Habilidades y Lenguajes</h1>

        <h2 className="subtitle" style={{ marginTop: '1.5rem' }}>Tecnologías</h2>
        <div className="skills-grid">
          {tecnologias.map(({ nombre, icono, nivel }) => (
            <div className="skill" key={nombre}>
              <div className="skill__icon">{icono}</div>
              <div className="skill__name">{nombre}</div>
              <div className="progress">
                <div className="progress__bar" style={{ width: `${nivel}%` }} />
              </div>
              <div className="skill__percent">{nivel}%</div>
            </div>
          ))}
        </div>

        <h2 className="subtitle">Herramientas</h2>
        <div className="chips">
          {herramientas.map((h) => (
            <span className="chip" key={h}>{h}</span>
          ))}
        </div>
      </div>
    </section>
  )
}