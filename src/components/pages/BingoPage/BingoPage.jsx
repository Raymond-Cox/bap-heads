import { ScrollBG } from '../../molecules'
import * as classes from './BingoPage.module.css'

/**
 * Displays current bingo information
 */
const BingoPage = () => {
  return (
    <ScrollBG>
      <div className={classes.container}>
        <div className={classes.innerContainer}>
          <h3>2024 Summer Bingo</h3>
          <p>
            Summer bingo has ended. Congratulations to the winning teams, as
            well as to each competitor for making the event so much fun.
          </p>

          <a
            href="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAGOL61aiq4&#x2F;M6KIiTJ4hytbHeOgV0NRpw&#x2F;view?utm_content=DAGOL61aiq4&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.link}
          >
            Bingo Stats
          </a>
          <div className={classes.canvas}>
            <iframe
              loading="lazy"
              className={classes.iframe}
              src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAGOL61aiq4&#x2F;M6KIiTJ4hytbHeOgV0NRpw&#x2F;view?embed"
              allowFullScreen
              allow="fullscreen"
            />
          </div>

          <hr />

          <a
            href="https://docs.google.com/spreadsheets/d/1i-uU3AFwac_241e-ybhGcItHkIO-ihOUaKlF-XP9mFY/edit?usp=sharing"
            target="_blank"
            rel="noreferrer noopener"
            className={classes.link}
          >
            Full team results and logs
          </a>
          <iframe
            src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQKMKUVHFHn6PoBmE4ie9uKqKrbGFmr9cMM1rBzFvS-nO88nowXE8B8j3H08l6GVq25OBPY8K2Gp_CF/pubhtml?gid=822621149&amp;single=true&amp;widget=true&amp;headers=false"
            width="100%"
            height="700"
          />
        </div>
      </div>
    </ScrollBG>
  )
}

export default BingoPage
