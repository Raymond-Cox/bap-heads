import { NavLink } from 'react-router-dom'
import * as classes from './Navbar.module.css'

const links = [
  { path: '/', title: 'Home' },
  { path: '/clogs', title: 'Collection Logs' },
  { path: '/bapscores', title: 'Bap Scores' },
]

/**
 * A navigation bar that links to the main pages of the application.
 */
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
