import TarjetaProyecto from '../components/TarjetaProyecto'

const proyectos = [
  {
    titulo: 'Psicoanálisis Conductual',
    descripcion:
      'Un proyecto creado por mi durante la educación media dentro del instituto superior de comercio (insuco). Tiene la finalidad de recopilar y analizar distintos tipos de condiciones que afectan la conducta mediante la percepción del afectado.',
    enlace:
      'https://vfonseca2026-afk.github.io/ICINF1107_Portafolio_Vicente-Fonseca/proyectos/psicoanalisis-conductual/index.html',
  },
  {
    titulo: 'Bitácora Fungi',
    descripcion:
      'Este proyecto fue creado con la finalidad de dar a conocer la diversidad Fungi existente en la comuna de Temuco, recopilando así avistamientos, zonas e información acerca de las distintas especies observadas.',
    enlace: 'https://vfonseca2026-afk.github.io/ICINF1107_Portafolio_Vicente-Fonseca/proyectos/HongosTemuco/HongosTemuco.html', 
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