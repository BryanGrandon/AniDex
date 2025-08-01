type Default_Card = {
  id: number
  image: string
  title: string
  highlightText: string
  highlightClass: string
}
const DefaultCard = ({ image, title, highlightText, highlightClass, id }: Default_Card) => {
  return (
    <section className='relative self-baseline w-full flex flex-col justify-between'>
      <img src={image} alt={id + '-img'} className='object-cover rounded-lg ' />
      <abbr title={title} className='no-underline'>
        <h3 className='overflow-hidden text-ellipsis whitespace-nowrap cursor-pointer p-2'>{title}</h3>
      </abbr>
      <p class={`bg-dark-transparent absolute shadow shadow-gray-950  ${highlightClass}`}>{highlightText}</p>
    </section>
  )
}

export default DefaultCard
