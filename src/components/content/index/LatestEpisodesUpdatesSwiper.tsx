import { useStore } from '@nanostores/preact'
import { latest_Episodes_Updates } from '../../../services/storage/general-store'
import type { LEU } from '../../../services/api/interfaces/Latest_Episodes_Updates'
import { SwiperSlide } from 'swiper/react'

import SwiperCustom from '../../layout/SwiperCustom'
import DefaultCard from '../../ui/DefaultCard'

const LatestEpisodesUpdatesSwiper = () => {
  const $leu: LEU = useStore(latest_Episodes_Updates)
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
