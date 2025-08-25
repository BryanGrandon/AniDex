import useModalInteraction from '../../utils/hooks/useModalInteraction'

type mini_card = {
  image: string
  title: string
  text?: string
  highlight?: string
  id: number
  type: string
}

const MiniCard = ({ image, title, text, highlight, id, type }: mini_card) => {
  const { openModal } = useModalInteraction()
  return (
    <section
      className='rounded-lg overflow-hidden glassmorphism border  hover:border-[color:var(--color-primary)_!important] hover:scale-105 active:scale-95 cursor-pointer'
      onClick={() => openModal({ id, type })}
    >
      <section className='grid grid-cols-[64px_calc(100%_-_64px)] grid-rows-[84px]'>
        <img src={image} alt={`${title}-img`} className='w-17 object-contain' />
        <section className='p-2 overflow-hidden'>
          <abbr title={title} className='no-underline'>
            <h3 className='overflow-hidden whitespace-nowrap text-ellipsis'>{title}</h3>
          </abbr>
          <abbr title={text} className='no-underline'>
            <h3 className='overflow-hidden whitespace-nowrap text-ellipsis text-sm text-gray-400'>{text}</h3>
          </abbr>
          <p className='text-end'>{highlight}</p>
        </section>
      </section>
    </section>
  )
}

export default MiniCard
