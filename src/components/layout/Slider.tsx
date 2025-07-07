import { useStore } from '@nanostores/preact'
import { seasons_now } from '../../services/storage/general-store'
import type { Seasons_now } from '../../services/api/interfaces'
import DefaultCard from '../DefaultCard'
// Test
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectCreative, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'

const Seasons = () => {
  const $season_now: Seasons_now = useStore(seasons_now)

  return (
    <article>
      <h1>Seasons sss </h1>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
          1280: {
            slidesPerView: 5,
          },
          1600: {
            slidesPerView: 6,
          },
        }}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        modules={[Pagination, Autoplay]}
        className='test  w-full h-100'
      >
        {$season_now.data.map((season) => (
          <SwiperSlide>
            <DefaultCard id={season.mal_id} img={season.images.webp.large_image_url} title={season.title} episodes={season.episodes} />
          </SwiperSlide>
        ))}
      </Swiper>
    </article>
  )
}

export default Seasons
