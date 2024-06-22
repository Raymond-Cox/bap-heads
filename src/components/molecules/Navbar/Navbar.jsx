import { NavLink } from 'react-router-dom'
import { routes } from '../../../routes/routes'
import * as classes from './Navbar.module.css'

const links = routes[0].children.map(({ path, title }) => ({ path, title }))

const Navbar = () => {
  return (
    <nav>
      {links.map(({ path, title }) => (
        <NavLink
          key={path}
          to={path}
          className={({ isActive }) => (isActive ? classes.active : '')}
        >
          {title}
        </NavLink>
      ))}
    </nav>
  )
}

export default Navbar
