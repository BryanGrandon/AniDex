import { useEffect, useState } from 'preact/hooks'

import { useStore } from '@nanostores/preact'
import { dataMPA } from '../../../../utils/storage/data-index'
import MiniCard from '../MiniCard'
import type { default_data } from '../../../../services/api/interfaces/default-data'

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
