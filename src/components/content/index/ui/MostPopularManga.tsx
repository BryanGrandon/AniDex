import MiniCard from '../MiniCard'
import type { most_popular_manga } from '../../../../services/api/interfaces/most-popular-manga'
import { URL_MOST_POPULAR_MANGA } from '../../../../services/constants/urls'
import { useGetDataApi } from '../../../../utils/hooks/useGetDataApi'

const MostPopularManga = () => {
  const mpm: most_popular_manga = useGetDataApi(URL_MOST_POPULAR_MANGA)

  return (
    <>
      {mpm?.data?.map((data) => (
        <MiniCard title={data?.title} text={data?.status} highlight={`⭐ ${data?.popularity}`} image={data?.images.webp.large_image_url} />
      ))}
    </>
  )
}

export default MostPopularManga
