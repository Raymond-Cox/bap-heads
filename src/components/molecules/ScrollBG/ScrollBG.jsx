import * as classes from './ScrollBG.module.css'

/**
 * Wraps children in a ye old scroll background.
 * @param {import('react').PropsWithChildren} param0
 */
const ScrollBG = ({ children }) => {
  return (
    <div className={classes.mainContainer}>
      <div className={classes.middleContainer}>{children}</div>
    </div>
  )
}

export default ScrollBG
