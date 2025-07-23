import { URL_MOST_POPULAR_ANIME } from '../../../../services/constants/urls'
import MiniCard from '../MiniCard'
import { useGetDataApi } from '../../../../utils/hooks/useGetDataApi'
import type { default_data } from '../../../../services/api/interfaces/default-data'

const MostPopularAnime = () => {
  const mpa: default_data = useGetDataApi(URL_MOST_POPULAR_ANIME)

  return (
    <>
      {mpa?.data?.map((data) => (
        <MiniCard title={data?.title} text={data?.rating} highlight={`⭐ ${data?.popularity}`} image={data?.images.webp.large_image_url} />
      ))}
    </>
  )
}

export default MostPopularAnime
