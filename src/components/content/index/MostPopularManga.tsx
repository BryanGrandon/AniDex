import { mostPopularManga } from '../../../services/constants/index-page'
import { removeTheSameElements } from '../../../services/scripts/remove-the-same-elements'
import MiniCard from './MiniCard'

const MostPopularManga = () => {
  const data = mostPopularManga.data

  return (
    <section class='flex flex-col gap-2'>
      {data?.map((data) => (
        <MiniCard title={data?.title} text={data?.status} highlight={`⭐ ${data?.popularity}`} image={data?.images.webp.large_image_url} />
      ))}
    </section>
  )
}

export default MostPopularManga
