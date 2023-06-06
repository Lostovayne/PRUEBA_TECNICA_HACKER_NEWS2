import { header, link } from './Header.css'

export const Header = () => {
  return (
    <nav className={header}>
      <img className='' height={'30px'} src='/logo.svg' alt='logo hacker news' />
      <a href='' className={link}>
        Hacker News
      </a>
    </nav>
  )
}
