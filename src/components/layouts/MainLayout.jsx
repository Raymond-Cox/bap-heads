import * as classes from './MainLayout.module.css'
import header from '../../assets/bapheads.png'
import { Outlet } from 'react-router-dom'
import { Footer } from '../molecules'

/**
 * Adds padding and structure to the main content of the application.
 */
const MainLayout = () => {
  return (
    <div className={classes.container}>
      <div className={classes.innerContainer}>
        <img src={header} alt="BapHeads logo" className={classes.headerImg} />
        <Outlet />
      </div>

      <Footer />
    </div>
  )
}

export default MainLayout
