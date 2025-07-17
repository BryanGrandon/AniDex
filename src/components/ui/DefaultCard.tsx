type Default_Card = {
  id: number
  image: string
  title: string
  highlightText: string
  highlightClass: string
}
const DefaultCard = ({ image, title, highlightText, highlightClass, id }: Default_Card) => {
  return (
    <section className='relative min-h-full self-baseline'>
      <img src={image} alt={id + '-img'} className='object-contain rounded-lg' />
      <abbr title={title} className='no-underline'>
        <h3 className='overflow-hidden text-ellipsis whitespace-nowrap cursor-pointer p-2'>{title}</h3>
      </abbr>
      <p class={highlightClass}>{highlightText}</p>
    </section>
  )
}

export default DefaultCard
