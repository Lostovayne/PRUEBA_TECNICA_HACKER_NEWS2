import ContentLoader from 'react-content-loader'

const StoryLoader = () => (
  <ContentLoader
    speed={2}
    width={280}
    height={55}
    viewBox='0 0 280 55'
    backgroundColor='#f0eaea'
    foregroundColor='#ecebeb'>
    <rect x='48' y='8' rx='3' ry='3' width='88' height='6' />
    <rect x='48' y='26' rx='3' ry='3' width='52' height='6' />
    <rect x='0' y='56' rx='3' ry='3' width='410' height='6' />
    <rect x='0' y='72' rx='3' ry='3' width='380' height='6' />
    <rect x='0' y='88' rx='3' ry='3' width='178' height='6' />
    <rect x='140' y='115' rx='0' ry='0' width='0' height='1' />
    <rect x='1' y='35' rx='0' ry='0' width='264' height='26' />
    <rect x='23' y='7' rx='0' ry='0' width='183' height='24' />
    <rect x='208' y='9' rx='0' ry='0' width='67' height='24' />
  </ContentLoader>
)

export default StoryLoader
