import { mostPopularAnime } from '../../../services/constants/index-page'
import MiniCard from './MiniCard'

const MostPopularAnime = () => {
  let data = mostPopularAnime.data

  return (
    <section class='flex flex-col gap-2'>
      {data?.map((data) => (
        <MiniCard title={data?.title} text={data?.rating} highlight={`⭐ ${data?.popularity}`} image={data?.images.webp.large_image_url} />
      ))}
    </section>
  )
}

export default MostPopularAnime
