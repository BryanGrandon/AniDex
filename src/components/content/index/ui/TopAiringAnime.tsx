import { useStore } from '@nanostores/preact'
import MiniCard from './MiniCard'
import { dataTAA } from '../../../../utils/storage/data-index'
import type { default_data } from '../../../../utils/interfaces/default-data'

const TopAiringAnime = () => {
  const $dataTAA: default_data = useStore(dataTAA)

  return (
    <>
      {$dataTAA?.data?.map((data) => (
        <MiniCard title={data?.title} text={data?.rating} highlight={`⭐ ${data?.rank}`} image={data?.images.webp.large_image_url} />
      ))}
    </>
  )
}

export default TopAiringAnime
