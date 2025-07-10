type Card_LEU = {
  id: number
  image: string
  title: string
  episodes: number
}

const CardLEU = ({ image, title, episodes, id }: Card_LEU) => {
  return (
    <div className='relative test min-h-full self-baseline'>
      <p className=' absolute top-4 right-0 bg-gray-900 rounded-l-xl px-2'>Episode: {episodes}</p>
      <img src={image} alt={id + '-img'} className='object-contain rounded h-auto' />
      <abbr title={title} className='no-underline'>
        <h3 className='overflow-hidden cursor-pointer text-ellipsis whitespace-nowrap p-1 '>{title}</h3>
      </abbr>
    </div>
  )
}

export default CardLEU
