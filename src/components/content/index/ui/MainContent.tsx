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
        <section class='flex items-center'>
          <h2 className='font-basicaline text-3xl whitespace-nowrap'>{title}</h2>
          <span className='w-full h-[1px] bg-primary mx-4 rounded-2xl' />
        </section>
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
