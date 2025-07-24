import { useStore } from '@nanostores/preact'
import MiniCard from './MiniCard'
import { dataMPA } from '../../../../utils/storage/data-index'
import type { default_data } from '../../../../utils/interfaces/default-data'

const MostPopularAnime = () => {
  const $dataMPA: default_data = useStore(dataMPA)

  return (
    <>
      {$dataMPA?.data?.map((data) => (
        <MiniCard title={data?.title} text={data?.rating} highlight={`⭐ ${data?.popularity}`} image={data?.images.webp.large_image_url} />
      ))}
    </>
  )
}

export default MostPopularAnime
