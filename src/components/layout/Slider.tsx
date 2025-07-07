import { useStore } from '@nanostores/preact'
import { seasons_now } from '../../services/storage/general-store'
import type { Seasons_now } from '../../services/api/interfaces'
import DefaultCard from '../DefaultCard'

const Seasons = () => {
  const $season_now: Seasons_now = useStore(seasons_now)
  return (
    <article>
      <h1>Seasons</h1>
      <section class='flex  justify-center gap-4'>
        {$season_now.data.map((season) => (
          <DefaultCard id={season.mal_id} img={season.images.webp.image_url} title={season.title} episodes={season.episodes} status={season.status} />
        ))}
      </section>
    </article>
  )
}

export default Seasons
