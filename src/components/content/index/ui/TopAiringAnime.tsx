import { useEffect, useState } from 'preact/hooks'

import MiniCard from '../MiniCard'
import type { default_data } from '../../../../services/api/interfaces/default-data'
import { getDataUrl } from '../../../../services/api/getDataUrl'
import { URL_TOP_AIRING_ANIME } from '../../../../utils/constants/urls-api'
import { useStore } from '@nanostores/preact'
import { dataTAA } from '../../../../utils/storage/data-index'

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
