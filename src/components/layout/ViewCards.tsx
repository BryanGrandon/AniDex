import { useEffect, useState } from 'preact/hooks'
import { getCharacters } from '../../services/getInfoApi'

const Greeting = () => {
  const [data, setData] = useState<any>([])

  const getAnime = async () => {
    const response = await getCharacters('https://api.jikan.moe/v4/characters?page=1&limit=10')
    if (response) {
      setData(response)
    } else {
      console.error('Error fetching data')
    }
  }
  useEffect(() => {
    getAnime()
  }, [])

  return (
    <main>
      <article>
        <h2 class='text-2xl font-bold'>Cards</h2>
      </article>
      <article>
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
