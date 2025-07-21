import { SwiperSlide } from 'swiper/react'
import SwiperCustom from '../../layout/SwiperCustom'
import DefaultCard from '../../ui/DefaultCard'
import { dataIndex } from '../../../services/constants/index-page'

const CurrentSeasonSwiper = () => {
  const $currentSeason = dataIndex.currentSeason

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
      <h2 class='font-basicaline text-3xl py-5'>
        Current seasons: <span class='capitalize text-primary'>{$currentSeason.data[0].season}</span>
      </h2>

      <SwiperCustom breakpoints={breakpoint} delay={3000}>
        {$currentSeason.data.map((season) => (
          <SwiperSlide>
            <DefaultCard
              id={season.mal_id}
              image={season.images.webp.large_image_url}
              title={season.title}
              highlightText={season.type}
              highlightClass='absolute top-2 right-2 bg-black rounded-xl px-2'
            />
          </SwiperSlide>
        ))}
      </SwiperCustom>
    </article>
  )
}

export default CurrentSeasonSwiper
