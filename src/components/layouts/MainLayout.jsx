import * as classes from './MainLayout.module.css'
import header from '../../assets/bapheads.png'
import { Outlet } from 'react-router-dom'
import { Navbar } from '../molecules'
/**
 * Adds padding and structure to the main content of the application.
 */
const MainLayout = () => {
  return (
    <div className={classes.container}>
      <img src={header} alt="BapHeads logo" className={classes.headerImg} />
      <Navbar />
      <Outlet />
    </div>
  )
}

export default MainLayout
