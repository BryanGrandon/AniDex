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
        spaceBetween={30}
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
        className='p-8 rounded-lg shadow-lg'
      >
        {$season_now.data.map((season) => (
          <SwiperSlide>
            <DefaultCard id={season.mal_id} img={season.images.webp.large_image_url} title={season.title} episodes={season.episodes} status={season.status} />
          </SwiperSlide>
        ))}
      </Swiper>
    </article>
  )
}

export default Seasons
