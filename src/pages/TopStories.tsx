import useSwr from 'swr'
import { getTopStories } from '../services/hacker-news'
import Story from '../components/Story'
import { style } from '@vanilla-extract/css'

const TopStoriesPage = () => {
  const { data, error } = useSwr('stories', () => getTopStories(1, 10))

  return (
    <>
      <ul style={{ listStyleType: 'none' }}>
        {error && <li>Something went wrong</li>}
        {data?.map((id: number, index: number) => (
          <li key={id}>
            <Story id={id} index={index} />
          </li>
        ))}
      </ul>
    </>
  )
}
export default TopStoriesPage
