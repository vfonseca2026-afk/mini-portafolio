import FormularioContacto from '../components/FormularioContacto'

export default function Contacto() {
  return (
    <section className="section">
      <div className="container">
        <h1>Contacto</h1>
        <p className="section__subtitle">
          ¿Tienes alguna pregunta o propuesta? ¡Me encantaría saber de ti!
        </p>
        <FormularioContacto />
      </div>
    </section>
  )
}