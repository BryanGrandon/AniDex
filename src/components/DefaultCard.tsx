interface Default_Card {
  id: number
  img: string
  title: string
  episodes: number
}

const DefaultCard = ({ img, title, episodes }: Default_Card) => {
  return (
    <a class='block min-h-85 w-58 relative'>
      <img src={img} alt={`img-${title}`} class='w-full max-h-68 rounded' />
      <p class='text-gray-200 absolute top-3 right-0  px-2 bg-gray-900 rounded-l-xl '>Episodes: {episodes}</p>
      <h3 class=' bottom-2 left-0 text-gray-650 text-lg p-2'>{title}</h3>
    </a>
  )
}

export default DefaultCard
