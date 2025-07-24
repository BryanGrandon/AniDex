import { SwiperSlide } from 'swiper/react'
import { useStore } from '@nanostores/preact'
import DefaultCard from '../../../ui/DefaultCard'
import SwiperCustom from '../../../layout/SwiperCustom'
import { dataCS } from '../../../../utils/storage/data-index'
import type { default_data } from '../../../../utils/interfaces/default-data'

const CurrentSeasonSwiper = () => {
  const $dataCS: default_data = useStore(dataCS)

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
    <article class='p-4' style={{ gridArea: 'content' }}>
      <h2 class='font-basicaline text-3xl py-5'>
        Current seasons: <span class='capitalize text-primary'>{$dataCS?.data[0]?.season}</span>
      </h2>

      <SwiperCustom breakpoints={breakpoint} delay={3000}>
        {$dataCS?.data?.map((data) => (
          <SwiperSlide>
            <DefaultCard id={data?.mal_id} image={data?.images.webp.large_image_url} title={data?.title} highlightText={data?.type} highlightClass='absolute top-2 right-2 bg-black rounded-xl px-2' />
          </SwiperSlide>
        ))}
      </SwiperCustom>
    </article>
  )
}

export default CurrentSeasonSwiper
