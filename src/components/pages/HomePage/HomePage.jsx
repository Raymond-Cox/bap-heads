import { Fragment } from 'react'
import { FiExternalLink } from 'react-icons/fi'
import { ScrollBG } from '../../molecules'
import * as classes from './HomePage.module.css'

const socials = [
  {
    link: 'https://discord.gg/bapheads',
    text: 'Discord',
  },
  {
    link: 'https://wiseoldman.net/groups/5474',
    text: 'WiseOldMan',
  },
]

const items = [
  {
    link: 'https://i.imgur.com/ZVMcNMR.jpeg',
    alt: 'BapHeads Newsletter',
    text: 'Newsletter',
  },
  {
    link: 'https://i.imgur.com/R6DBVQ0.png',
    alt: 'BapHeads Calendar',
    text: 'Calendar',
  },
]

const HomePage = () => {
  return (
    <ScrollBG>
      <h1>Welcome to BapHeads OSRS clan</h1>
      <div className={classes.socialsContainer}>
        {socials.map(({ link, text }) => (
          <a key={link} href={link} target="_blank" rel="noopener noreferrer">
            {text}
            <FiExternalLink />
          </a>
        ))}
      </div>

      <hr />

      {items.map(({ link, alt, text }) => (
        <Fragment key={link}>
          <h2>{text}</h2>
          <a href={link} target="_blank" rel="noopener noreferrer">
            <img src={link} alt={alt} />
          </a>
        </Fragment>
      ))}
    </ScrollBG>
  )
}

export default HomePage
