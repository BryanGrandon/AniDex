type mini_card = {
  image: string
  title: string
  text?: string
  highlight?: string
  id?: number
}

const MiniCard = ({ image, title, text, highlight }: mini_card) => {
  return (
    <section class='rounded-lg overflow-hidden z-10 glassmorphism'>
      <section className='grid grid-cols-[60px_calc(100%_-_60px)]'>
        <img src={image} alt={`${title}-img`} className='w-15 h-21 object-contain' />
        <section className='p-2'>
          <abbr title={title} className='no-underline'>
            <h3 className='overflow-hidden whitespace-nowrap text-ellipsis'>{title}</h3>
          </abbr>
          <abbr title={text} className='no-underline'>
            <h3 className='overflow-hidden whitespace-nowrap text-ellipsis text-sm text-gray-400'>{text}</h3>
          </abbr>
          <p class='text-end'>{highlight}</p>
        </section>
      </section>
    </section>
  )
}

export default MiniCard
