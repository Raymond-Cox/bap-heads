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
    link: 'https://cdn.discordapp.com/attachments/1108059336355360768/1252003284210679948/Bap_Times_issue_1.png?ex=6677e2ac&is=6676912c&hm=ea68ec8634b70ca8a816feea27e33e365564d51b965d04f50c6e0a6c820cf0e7&',
    alt: 'BapHeads Newsletter',
    text: 'Newsletter',
  },
  {
    link: 'https://cdn.discordapp.com/attachments/1108059336355360768/1252003285481558077/bh_june_2024_4.png?ex=6677e2ac&is=6676912c&hm=aec4b788f120ab276277488e5263d667d5ff3316be6a700fbfbbc37169a5f786&',
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
