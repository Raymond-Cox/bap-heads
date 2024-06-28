import { Fragment } from 'react'
import { NewsItem, ScrollBG } from '../../molecules'
import { newsItems, socials } from '../../../utils'
import * as classes from './HomePage.module.css'

/**
 * The home page of the BapHeads website
 */
const HomePage = () => {
  return (
    <ScrollBG>
      <h1>Welcome to BapHeads OSRS clan</h1>
      <div className={classes.socialsContainer}>
        {socials.map(({ link, text, img }) => (
          <a key={link} href={link} target="_blank" rel="noopener noreferrer">
            <img src={img} alt={text} />
          </a>
        ))}
      </div>

      <div className={classes.featuredContainer}>
        <iframe
          src="https://streamable.com/e/j593y0"
          allowFullScreen
          className={classes.iframe}
        />
      </div>

      <h3>News and Updates</h3>

      <div>
        {newsItems.map((item) => (
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
