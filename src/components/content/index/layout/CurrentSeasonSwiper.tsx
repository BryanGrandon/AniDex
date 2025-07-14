import { useStore } from '@nanostores/preact'
import { seasons_now } from '../../../../services/storage/general-store'
import type { Seasons_now } from '../../../../services/api/interfaces'
import { SwiperSlide } from 'swiper/react'
import DefaultCard from '../../../DefaultCard'
import SwiperCustom from '../../../layout/SwiperCustom'

const CurrentSeasonSwiper = () => {
  const $season_now: Seasons_now = useStore(seasons_now)

  return (
    <article class='p-4'>
      <h2 class='font-basicaline text-2xl py-5'>
        Current seasons: <span class='capitalize text-primary'>{$season_now.data[0].season}</span>
      </h2>

      <SwiperCustom>
        {$season_now.data.map((season) => (
          <SwiperSlide>
            <DefaultCard id={season.mal_id} img={season.images.webp.large_image_url} title={season.title} episodes={season.episodes} />
          </SwiperSlide>
        ))}
      </SwiperCustom>
    </article>
  )
}

export default CurrentSeasonSwiper
