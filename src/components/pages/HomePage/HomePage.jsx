import { Fragment } from 'react'
import { FiExternalLink } from 'react-icons/fi'
import { NewsItem, ScrollBG } from '../../molecules'
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
    url: 'https://i.imgur.com/aYj11UR.png',
    title: 'Bap Times Issue #1',
    description:
      'Read about the latest clan news, events, and more in the first issue of the Bap Times.',
    date: '6/1/2024',
  },
  {
    url: 'https://i.imgur.com/R6DBVQ0.png',
    title: 'June Events',
    description: 'Check out the events we have planned for the month of June.',
    date: '6/1/2024',
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

      <h3>News and Updates</h3>

      <div>
        {items.map((item) => (
          <Fragment key={item.url}>
            <NewsItem {...item} />
            <hr />
          </Fragment>
        ))}
      </div>
    </ScrollBG>
  )
}

export default HomePage
