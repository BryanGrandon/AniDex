import { top_upcoming_anime } from '../../../services/storage/general-store'
import type { TUA } from '../../../services/api/interfaces/top_upcoming_anime'
import { useStore } from '@nanostores/preact'

import { SwiperSlide } from 'swiper/react'
import SwiperCustom from '../../layout/SwiperCustom'
import DefaultCard from '../../ui/DefaultCard'

const TopUpcomingAnimeSwiper = () => {
  const $tua: TUA = useStore(top_upcoming_anime)

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
