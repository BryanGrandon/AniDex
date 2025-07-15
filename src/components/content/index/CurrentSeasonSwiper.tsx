import { useStore } from '@nanostores/preact'
import { SwiperSlide } from 'swiper/react'
import { seasons_now } from '../../../services/storage/general-store'
import type { Seasons_now } from '../../../services/api/interfaces'
import SwiperCustom from '../../layout/SwiperCustom'
import DefaultCard from '../../ui/DefaultCard'

const CurrentSeasonSwiper = () => {
  const $season_now: Seasons_now = useStore(seasons_now)

  const breakpoint = {
    320: { slidesPerView: 2 },
    520: { slidesPerView: 3 },
    640: { slidesPerView: 4 },
    768: { slidesPerView: 5 },
    1024: { slidesPerView: 6 },
    1280: { slidesPerView: 7 },
    1606: { slidesPerView: 8 },
  }

  return (
    <article class='p-4'>
      <h2 class='font-basicaline text-2xl py-5'>
        Current seasons: <span class='capitalize text-primary'>{$season_now.data[0].season}</span>
      </h2>

      <SwiperCustom breakpoints={breakpoint} delay={3000}>
        {$season_now.data.map((season) => (
          <SwiperSlide>
            <DefaultCard id={season.mal_id} image={season.images.webp.large_image_url} title={season.title} highlight={`Type: ${season.type}`} />
          </SwiperSlide>
        ))}
      </SwiperCustom>
    </article>
  )
}

export default CurrentSeasonSwiper
