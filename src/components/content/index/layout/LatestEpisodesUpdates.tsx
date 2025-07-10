import { useStore } from '@nanostores/preact'
import { latest_Episodes_Updates } from '../../../../services/storage/general-store'
import type { LEU } from '../../../../services/api/interfaces/Latest_Episodes_Updates'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay, Mousewheel } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import CardLEU from '../ui/CardLEU'

const LatestEpisodesUpdates = () => {
  const $leu: LEU = useStore(latest_Episodes_Updates)

  return (
    <article>
      <h2>Latest Episodes Updates</h2>

      <article className=''>
        <Swiper
          style={{
            '--swiper-pagination-color': 'var(--primary)',
            '--swiper-pagination-right': '8px',
            '--swiper-pagination-bottom': '-5px',
            '--swiper-pagination-bullet-inactive-opacity': ' 0.3',
            '--swiper-pagination-bullet-horizontal-gap': ' 5px',
          }}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 2000, disableOnInteraction: false, pauseOnMouseEnter: true }}
          pagination={{ clickable: true }}
          scrollbar={true}
          modules={[Pagination, Autoplay]}
          className=''
          breakpoints={{
            320: {
              slidesPerView: 2,
            },
            640: {
              slidesPerView: 4,
            },
            768: {
              slidesPerView: 5,
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
          {$leu.data.map((data) => (
            <SwiperSlide>
              <CardLEU id={data.entry.mal_id} image={data.entry.images.webp.large_image_url} title={data.entry.title} episodes={data.episodes[0].mal_id} />
            </SwiperSlide>
          ))}
        </Swiper>
      </article>
    </article>
  )
}

export default LatestEpisodesUpdates
