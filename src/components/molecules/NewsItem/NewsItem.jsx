import * as classes from './NewsItem.module.css'

/**
 * A news item that displays an image, title, description, date, and url
 * @param {{title: string, description: string, date: string, url: string, actionHtml?: React.ReactNode}} param0
 */
const NewsItem = ({ title, description, date, url, actionHtml }) => {
  return (
    <div className={classes.container}>
      <div className={classes.imgContainer}>
        <a href={url} target="_blank" rel="noreferrer">
          <img src={url} alt={title} />
        </a>
      </div>

      <div className={classes.textContainer}>
        <a href={url} target="_blank" rel="noreferrer">
          {title}
        </a>
        <p className={classes.date}>{date}</p>
        <p>{description}</p>

        {actionHtml}
      </div>
    </div>
  )
}

export default NewsItem
