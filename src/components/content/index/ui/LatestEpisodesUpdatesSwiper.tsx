import { SwiperSlide } from 'swiper/react'
import { useStore } from '@nanostores/preact'
import DefaultCard from '../../../ui/DefaultCard'
import SwiperCustom from '../../../layout/SwiperCustom'
import { dataLEU } from '../../../../utils/storage/data-index'
import type { latest_episodes_updates } from '../../../../utils/interfaces/latest-episodes-updates'

const LatestEpisodesUpdatesSwiper = () => {
  const $dataLEU: latest_episodes_updates = useStore(dataLEU)

  return (
    <SwiperCustom>
      {$dataLEU?.data?.map((data) => (
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
