import { URL_MOST_POPULAR_ANIME } from '../../../../services/constants/urls'
import MiniCard from '../MiniCard'
import { useGetDataApi } from '../../../../utils/hooks/useGetDataApi'

const MostPopularAnime = () => {
  const data = useGetDataApi(URL_MOST_POPULAR_ANIME)

  return (
    <section class='flex flex-col gap-2'>
      {data?.data?.map((data) => (
        <MiniCard title={data?.title} text={data?.rating} highlight={`⭐ ${data?.popularity}`} image={data?.images.webp.large_image_url} />
      ))}
    </section>
  )
}

export default MostPopularAnime
