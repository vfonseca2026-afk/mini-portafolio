import { NavLink } from 'react-router-dom'

const claseLink = ({ isActive }) =>
  `nav__link${isActive ? ' nav__link--active' : ''}`

export default function Header() {
  return (
    <header className="header">
      <div className="container header__inner">
        <NavLink to="/" className="header__logo">MiPortafolio</NavLink>
        <nav>
          <ul className="nav">
            <li><NavLink to="/" end className={claseLink}>Inicio</NavLink></li>
            <li><NavLink to="/sobre-mi" className={claseLink}>Sobre mí</NavLink></li>
            <li><NavLink to="/habilidades" className={claseLink}>Habilidades</NavLink></li>
            <li><NavLink to="/proyectos" className={claseLink}>Proyectos</NavLink></li>
            <li><NavLink to="/contacto" className={claseLink}>Contacto</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}