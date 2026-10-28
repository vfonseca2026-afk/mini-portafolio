import { Link } from 'react-router-dom';

function Inicio() {
  return (
    <section>
      <h1>Hola, soy Vicente</h1>
      <p>Estudiante de Ingeniería Civil en Informática. ¡Bienvenido a mi mini portafolio!</p>
      <Link to="/proyectos">Explorar Proyectos</Link>
    </section>
  );
}

export default Inicio;