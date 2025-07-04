import { useStore } from '@nanostores/preact'
import { seasons_now } from '../../services/storage/general-store'
import type { Seasons_now } from '../../services/api/interfaces'

const Seasons = () => {
  const $season_now: Seasons_now = useStore(seasons_now)

  return (
    <article>
      <h1>Seasons</h1>
      <div class='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {$season_now.data.map((season) => (
          <div key={season.mal_id} class='p-4 border rounded shadow'>
            <img src={season.images.jpg.image_url} alt={season.title} class='w-full h-auto mb-2 rounded' />
            <h2 class='text-xl font-bold'>{season.title}</h2>
            <p class='text-gray-600'>Episodes: {season.episodes}</p>
            <p class='text-gray-600'>Status: {season.status}</p>
          </div>
        ))}
      </div>
    </article>
  )
}

export default Seasons
