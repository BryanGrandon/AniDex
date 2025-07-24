import { useStore } from '@nanostores/preact'
import MiniCard from './MiniCard'
import { dataMPM } from '../../../../utils/storage/data-index'
import type { most_popular_manga } from '../../../../utils/interfaces/most-popular-manga'

const MostPopularManga = () => {
  const $dataMPM: most_popular_manga = useStore(dataMPM)

  return (
    <>
      {$dataMPM?.data?.map((data) => (
        <MiniCard title={data?.title} text={data?.status} highlight={`⭐ ${data?.popularity}`} image={data?.images.webp.large_image_url} />
      ))}
    </>
  )
}

export default MostPopularManga
