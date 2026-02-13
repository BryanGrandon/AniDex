import useWiki from '../../../utils/hooks/useWiki'

type Default_Card = {
  id: number
  type: string
  image: string
  title: string
  highlightText: string
  highlightClass: string
}

const DefaultCard = ({ image, title, highlightText, highlightClass, id, type }: Default_Card) => {
  const { handleMediaSelect } = useWiki()

  return (
    <section className='relative self-baseline w-full flex flex-col justify-between cursor-pointer' onClick={() => handleMediaSelect({ id, type })}>
      <img src={image} alt={id + '-img'} className='object-cover rounded-lg ' />
      <abbr title={title} className='no-underline'>
        <h3 className='overflow-hidden text-ellipsis whitespace-nowrap cursor-pointer p-2'>{title}</h3>
      </abbr>
      <p class={`bg-dark-transparent absolute shadow shadow-gray-950  ${highlightClass}`}>{highlightText}</p>
    </section>
  )
}

export default DefaultCard
