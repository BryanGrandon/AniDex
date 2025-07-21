import { dataIndex } from '../../../services/constants/index-page'
import { removeTheSameElements } from '../../../services/scripts/remove-the-same-elements'
import MiniCard from './MiniCard'

const TopAiringAnime = () => {
  let data = removeTheSameElements(dataIndex.topAiringAnime)

  return (
    <section class='flex flex-col gap-2'>
      {data.map((data) => (
        <MiniCard title={data?.title} text={data?.rating} highlight={`⭐ ${data?.rank}`} image={data?.images.webp.large_image_url} />
      ))}
    </section>
  )
}

export default TopAiringAnime
