type Default_Card = {
  id: number
  image: string
  title: string
  highlight: string
}

const DefaultCard = ({ image, title, highlight, id }: Default_Card) => {
  return (
    <div className='relative min-h-full self-baseline'>
      <p className=' absolute top-4 right-0 bg-gray-900 rounded-l-xl px-2 text-sm'>{highlight}</p>
      <img src={image} alt={id + '-img'} className='object-contain rounded-lg' />
      <abbr title={title} className='no-underline'>
        <h3 className='overflow-hidden text-ellipsis whitespace-nowrap cursor-pointer p-2'>{title}</h3>
      </abbr>
    </div>
  )
}

export default DefaultCard
