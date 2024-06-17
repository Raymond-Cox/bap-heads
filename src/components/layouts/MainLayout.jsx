import * as classes from './MainLayout.module.css'
import header from '../../assets/bapheads.png'
/**
 * Adds padding and structure to the main content of the application.
 * @param {import('react').PropsWithChildren} props
 */
const MainLayout = ({ children }) => {
    return (
        <div className={classes.container}>
            <img
                src={header}
                alt="BapHeads logo"
                className={classes.headerImg}
            />
            {children}
        </div>
    )
}

export default MainLayout
