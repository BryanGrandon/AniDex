import type { JSX } from 'preact'

type Props = {
  title: string
  description: string
  children?: JSX.Element
}

const MainContent = ({ title, description, children }: Props) => {
  return (
    <article className='flex flex-col gap-4 p-4 relative'>
      <section>
        <h2 className='font-basicaline text-3xl'>{title}</h2>
        <p className='prose-sm text-gray-400'>{description}</p>
      </section>
      <article className='swiper swiperMC w-full'>
        <section className='swiper-wrapper' id='my-slider'>
          {children}
        </section>
      </article>
    </article>
  )
}

export default MainContent
