import { SwiperSlide } from 'swiper/react'
import SwiperCustom from '../../layout/SwiperCustom'
import DefaultCard from '../../ui/DefaultCard'
import { dataIndex } from '../../../services/constants/index-page'

const LatestEpisodesUpdatesSwiper = () => {
  const $leu = dataIndex.latestEpisodesUpdates
  const limited = $leu.data.slice(0, 20)

  return (
    <SwiperCustom>
      {limited.map((data) => (
        <SwiperSlide>
          <DefaultCard
            id={data.entry.mal_id}
            image={data.entry.images.webp.large_image_url}
            title={data.entry.title}
            highlightText={`Episode: ${data.episodes[0].mal_id}`}
            highlightClass='absolute bottom-12 bg-black px-2 rounded-r-lg '
          />
        </SwiperSlide>
      ))}
    </SwiperCustom>
  )
}

export default LatestEpisodesUpdatesSwiper
