import MiniCard from '../MiniCard'
import { URL_TOP_AIRING_ANIME } from '../../../../services/constants/urls'
import { useGetDataApi } from '../../../../utils/hooks/useGetDataApi'
import type { default_data } from '../../../../services/api/interfaces/default-data'

const TopAiringAnime = () => {
  const taa: default_data = useGetDataApi(URL_TOP_AIRING_ANIME)

  return (
    <>
      {taa?.data?.map((data) => (
        <MiniCard title={data?.title} text={data?.rating} highlight={`⭐ ${data?.rank}`} image={data?.images.webp.large_image_url} />
      ))}
    </>
  )
}

export default TopAiringAnime
