import { useEffect, useState } from 'preact/hooks'

import MiniCard from '../MiniCard'
import type { most_popular_manga } from '../../../../services/api/interfaces/most-popular-manga'
import { getDataUrl } from '../../../../services/api/getDataUrl'
import { URL_MOST_POPULAR_MANGA } from '../../../../services/constants/urls'

const MostPopularManga = () => {
  const [data, setData] = useState<most_popular_manga>()

  const getDataApi = async (url: string) => {
    const info = await getDataUrl({ url })
    setData(info)
  }

  useEffect(() => {
    getDataApi(URL_MOST_POPULAR_MANGA)
  }, [])

  return (
    <section class='flex flex-col gap-2'>
      {data?.data?.map((data) => (
        <MiniCard title={data?.title} text={data?.status} highlight={`⭐ ${data?.popularity}`} image={data?.images.webp.large_image_url} />
      ))}
    </section>
  )
}

export default MostPopularManga
