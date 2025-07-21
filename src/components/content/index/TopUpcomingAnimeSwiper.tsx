import { SwiperSlide } from 'swiper/react'
import SwiperCustom from '../../layout/SwiperCustom'
import DefaultCard from '../../ui/DefaultCard'
import { dataIndex } from '../../../services/constants/index-page'

const TopUpcomingAnimeSwiper = () => {
  const $tua = dataIndex.topUpcomingAnime

  return (
    <SwiperCustom>
      {$tua.data?.map((data) => (
        <SwiperSlide>
          <DefaultCard
            id={data.mal_id}
            title={data.title}
            highlightText={data.year ? data.year : 'TBA'}
            image={data.images.webp.large_image_url}
            highlightClass='absolute top-0 right-0 left-0 bg-black text-center p-1'
          />
        </SwiperSlide>
      ))}
    </SwiperCustom>
  )
}

export default TopUpcomingAnimeSwiper
