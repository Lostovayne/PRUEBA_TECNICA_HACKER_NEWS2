import useSwr from 'swr'
import { getItemInfo } from '../services/hacker-news'
import { Link } from 'wouter'
import { story, storyFooter, storyHeader, storyTitle, storysmallLink } from './Story.css'
import StoryLoader from './StoryLoader'

const Story = (props: { id: number; index: number }) => {
  const { id, index } = props
  const { data, isLoading } = useSwr(`/story/${id}`, () => getItemInfo(id))

  if (isLoading) {
    // mostrar : el placeholder
    return <StoryLoader />
  }

  const { by, kids, score, title, url } = data

  console.log(data)

  let domain = ''
  try {
    domain = new URL(url).hostname.replace(/^www\./, '')
  } catch (error) {
    console.log(error)
  }

  // Mostrar el relativeTime

  return (
    <article className={story}>
      <header className={storyHeader}>
        <small>{index + 1}</small>
        <a href={url} target='_blank' className={storyTitle} rel='nopener norefer'>
          {title}
        </a>
        <a href={url} target='_blank' className={storysmallLink} rel='nopener norefer'>
          ({domain})
        </a>
      </header>

      <footer className={storyFooter}>
        <span>{score}</span>
        <Link className={storysmallLink} to={`/article/${id}`}>
          by {by}
        </Link>
        <Link className={storysmallLink} to={`/article/${id}`}>
          6 hours
        </Link>
        <Link className={storysmallLink} to={`/article/${id}`}>
          {kids?.length ?? 0} comments
        </Link>
      </footer>
    </article>
  )
}
export default Story
