import { FaHeart, FaRegCopyright } from 'react-icons/fa'
import * as classes from './Footer.module.css'

/**
 * A footer that displays the creator and support options
 */
const Footer = () => {
  return (
    <div className={classes.container}>
      <div className={classes.center}>
        <FaRegCopyright />
        2024 BapHeads
      </div>

      <div className={classes.center}>
        Made with <FaHeart color="red" /> by
        <a
          href="https://github.com/Raymond-Cox"
          target="_blank"
          rel="noreferrer"
        >
          Me am
        </a>
      </div>

      <a
        href="https://ko-fi.com/me_am"
        target="_blank"
        rel="noreferrer"
        className={classes.center}
      >
        Support operating costs or buy me a coffee
        <img
          src="https://storage.ko-fi.com/cdn/brandasset/logo_white_stroke.png?"
          alt="Buy Me a Coffee"
        />
      </a>
    </div>
  )
}

export default Footer
