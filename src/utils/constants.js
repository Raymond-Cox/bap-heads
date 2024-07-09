import discordIcon from '../assets/discord-mark-blue.svg'
import womIcon from '../assets/wom_logo.png'

export const socials = [
  {
    link: 'https://discord.gg/bapheads',
    text: 'Discord',
    img: discordIcon,
  },
  {
    link: 'https://wiseoldman.net/groups/5474',
    text: 'WiseOldMan',
    img: womIcon,
  },
]

export const newsItems = [
  {
    url: 'https://i.imgur.com/a0urCPE.jpeg',
    title: 'Summer Bingo Board Reveal',
    description:
      'Summer Bingo sign ups are now open! Check out the board and get ready to compete for prizes.',
    date: '7/8/2024',
    actionHtml: (
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        <a href="https://docs.google.com/spreadsheets/d/1i-uU3AFwac_241e-ybhGcItHkIO-ihOUaKlF-XP9mFY/edit?gid=1602991438#gid=1602991438">
          Rules and Info
        </a>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfqnm7-Ylh4FdvJ-IBxM9xy-50b0Xa_Ji4FVfKqQ5nXwO9v_w/viewform">
          Sign up here
        </a>
      </div>
    ),
  },
  {
    url: 'https://i.imgur.com/JGJp5kP.png',
    title: 'Bap Times Issue #2',
    description:
      'Read about the latest clan news, events, and more in this promising sequel of the Bap Times.',
    date: '6/28/2024',
  },
  {
    url: 'https://i.imgur.com/a96wqNR.png',
    title: 'July Events',
    description: 'Check out the events we have planned for the month of July.',
    date: '6/28/2024',
  },
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
