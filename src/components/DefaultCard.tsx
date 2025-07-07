interface Default_Card {
  id: number
  img: string
  title: string
  episodes: number
  status: string
}

const DefaultCard = ({ img, title, episodes, status }: Default_Card) => {
  return (
    <a class='p-4 border rounded shadow'>
      <img src={img} alt={`img-${title}`} class='w-full min-w-40 min-h-50 mb-2 rounded' />
      <h2 class='text-xl font-bold'>{title}</h2>
      <p class='text-gray-600'>Episodes: {episodes}</p>
      <p class='text-gray-600'>Status: {status}</p>
    </a>
  )
}

export default DefaultCard
