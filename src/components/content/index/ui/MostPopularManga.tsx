import { useEffect, useState } from 'preact/hooks'
import MiniCard from '../MiniCard'
import type { most_popular_manga } from '../../../../services/api/interfaces/most-popular-manga'
import { getDataUrl } from '../../../../services/api/getDataUrl'
import { URL_MOST_POPULAR_ANIME, URL_MOST_POPULAR_MANGA } from '../../../../utils/constants/urls-api'
import { useStore } from '@nanostores/preact'
import { dataMPM } from '../../../../utils/storage/data-index'

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
