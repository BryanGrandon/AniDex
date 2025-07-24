import { SwiperSlide } from 'swiper/react'
import { useStore } from '@nanostores/preact'
import DefaultCard from '../../../ui/DefaultCard'
import SwiperCustom from '../../../layout/SwiperCustom'
import { dataTUA } from '../../../../utils/storage/data-index'
import type { default_data } from '../../../../utils/interfaces/default-data'

const TopUpcomingAnimeSwiper = () => {
  const $dataTUA: default_data = useStore(dataTUA)

  return (
    <SwiperCustom>
      {$dataTUA.data?.map((data) => (
        <SwiperSlide>
          <DefaultCard
            id={data.mal_id}
            title={data.title}
            highlightText={String(data.year ? data.year : 'TBA')}
            image={data.images.webp.large_image_url}
            highlightClass='absolute top-0 right-0 left-0 bg-black text-center p-1'
          />
        </SwiperSlide>
      ))}
    </SwiperCustom>
  )
}

export default TopUpcomingAnimeSwiper
