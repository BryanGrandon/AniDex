import { useStore } from '@nanostores/preact'
import { latest_Episodes_Updates } from '../../../../services/storage/general-store'
import type { LEU } from '../../../../services/api/interfaces/Latest_Episodes_Updates'
import { SwiperSlide } from 'swiper/react'

import CardLEU from '../ui/CardLEU'
import SwiperCustom from '../../../layout/SwiperCustom'

const LatestEpisodesUpdates = () => {
  const $leu: LEU = useStore(latest_Episodes_Updates)

  return (
    <article>
      <h2>Latest Episodes Updates</h2>

      <article className=''>
        <SwiperCustom>
          {$leu.data.map((data) => (
            <SwiperSlide>
              <CardLEU id={data.entry.mal_id} image={data.entry.images.webp.large_image_url} title={data.entry.title} episodes={data.episodes[0].mal_id} />
            </SwiperSlide>
          ))}
        </SwiperCustom>
      </article>
    </article>
  )
}

export default LatestEpisodesUpdates
