import type { JSX } from 'preact/jsx-runtime'
import { Swiper } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'

type Swiper_Custom = {
  children: JSX.Element[]
  breakpoints?: {}
  delay?: number
}

const SwiperCustom = ({ children, breakpoints, delay }: Swiper_Custom) => {
  // out breakpoint and autoplay-delay
  const breakpointDefault = {
    320: { slidesPerView: 2 },
    640: { slidesPerView: 4 },
    768: { slidesPerView: 5 },
    1024: { slidesPerView: 5 },
    1280: { slidesPerView: 6 },
    1606: { slidesPerView: 7 },
  }

  return (
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
      autoplay={{ delay: delay ? delay : 2000, disableOnInteraction: false, pauseOnMouseEnter: true }}
      pagination={{ clickable: true }}
      scrollbar={true}
      modules={[Pagination, Autoplay]}
      className=''
      breakpoints={breakpoints ? breakpoints : breakpointDefault}
    >
      {children}
    </Swiper>
  )
}

export default SwiperCustom
