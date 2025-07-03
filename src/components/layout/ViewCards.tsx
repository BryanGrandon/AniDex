import { useEffect, useState } from 'preact/hooks'
import { getCharacters } from '../../services/getInfoApi'
import { TYPES_OF_GENRES } from '../../services/constants/api'

const Greeting = () => {
  const [data, setData] = useState<any>([])

  const getAnime = async () => {
    const response = await getCharacters('https://api.jikan.moe/v4/characters?page=1&limit=20')

    if (response) {
      setData(response)
    } else {
      console.error('Error fetching data')
    }
  }
  console.log(TYPES_OF_GENRES)

  useEffect(() => {
    getAnime()
  }, [])

  return (
    <main>
      <article>
        <h2 class='text-2xl font-bold'>Cards</h2>
      </article>
      <article class='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-4'>
        {data.data?.map((character) => (
          <div class='bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md'>
            <img src={character.images.jpg.image_url} alt={character.name} class='w-full h-auto rounded-lg mb-2' />
            <h3 class='text-lg font-semibold'>{character.name}</h3>
            <p class='text-gray-600 dark:text-gray-400'>{character.about.slice(0, 100)}...</p>
          </div>
        ))}
      </article>
    </main>
  )
}

export default Greeting
