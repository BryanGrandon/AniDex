import { useStore } from '@nanostores/preact'
import { seasons_now } from '../../services/storage/general-store'
import type { Seasons_now } from '../../services/api/interfaces'
import DefaultCard from '../DefaultCard'
// Test
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/grid'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'

const Seasons = () => {
  const $season_now: Seasons_now = useStore(seasons_now)

  return (
    <article class='p-4'>
      <h2 class='font-basicaline text-2xl py-5'>
        Seasons Now: <span class='capitalize text-primary'>{$season_now.data[0].season}</span>
      </h2>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        scrollbar={true}
        modules={[Pagination, Autoplay]}
        className=' '
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 5,
          },
          1280: {
            slidesPerView: 6,
          },
          1606: {
            slidesPerView: 7,
          },
        }}
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
