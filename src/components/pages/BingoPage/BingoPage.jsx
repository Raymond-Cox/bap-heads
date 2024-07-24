import { useEffect, useState } from 'react'
import { ScrollBG } from '../../molecules'
import * as classes from './BingoPage.module.css'

const startsAt = new Date('2024-08-05T15:00:00.000Z')
const endsAt = new Date('2024-08-15T15:00:00.000Z')

/**
 * Calculates the time left until the event starts
 * @param {Date} date
 */
const calcTimeLeft = (date, stateString = 'started') => {
  const now = new Date().getTime()
  const distance = date.getTime() - now

  const days = Math.floor(distance / (1000 * 60 * 60 * 24))
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  )
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((distance % (1000 * 60)) / 1000)

  if (days < 0 || hours < 0 || minutes < 0 || seconds < 0)
    return `Event has ${stateString}`

  return `${days}d ${hours}h ${minutes}m ${seconds}s`
}

/**
 * Displays current bingo information
 */
const BingoPage = () => {
  const [times, setTimes] = useState({
    startTime: calcTimeLeft(startsAt),
    endTime: calcTimeLeft(endsAt, 'ending'),
  })

  /**
   * Updates the time left every second
   */
  useEffect(() => {
    setInterval(() => {
      setTimes({
        startTime: calcTimeLeft(startsAt),
        endTime: calcTimeLeft(endsAt, 'ending'),
      })
    }, 1000)
  }, [])

  const renderTimes = () => {
    if (times.startTime !== 'Event has started')
      return <h4>Starts: {times.startTime}</h4>

    return <h4>Ends: {times.endTime}</h4>
  }

  return (
    <ScrollBG>
      <div className={classes.container}>
        <div className={classes.header}>
          <h3>2024 Summer Bingo</h3>
          {renderTimes()}

          <a
            href="https://docs.google.com/spreadsheets/d/1i-uU3AFwac_241e-ybhGcItHkIO-ihOUaKlF-XP9mFY/edit?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            View full information
          </a>
        </div>

        <iframe
          src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSsVVjhj-K0X86uOg8H0vmq5dr2UN8I4gLCnFZbmQVX736NvXvJRLXt7JCKDboPDhrL_JGWqbFcvraa/pubhtml?gid=1733453311&amp;single=true&amp;widget=true&amp;headers=false"
          width="100%"
          height="700"
        />
      </div>
    </ScrollBG>
  )
}

export default BingoPage
