import MiniCard from '../MiniCard'
import { URL_TOP_AIRING_ANIME } from '../../../../services/constants/urls'
import { useGetDataApi } from '../../../../utils/hooks/useGetDataApi'

const TopAiringAnime = () => {
  const data = useGetDataApi(URL_TOP_AIRING_ANIME)

  return (
    <section class='flex flex-col gap-2'>
      {data?.data?.map((data) => (
        <MiniCard title={data?.title} text={data?.rating} highlight={`⭐ ${data?.rank}`} image={data?.images.webp.large_image_url} />
      ))}
    </section>
  )
}

export default TopAiringAnime
