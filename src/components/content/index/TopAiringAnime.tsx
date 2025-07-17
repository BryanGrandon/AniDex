import { useStore } from '@nanostores/preact'
import { top_airing_anime } from '../../../services/storage/general-store'
import type { TAA } from '../../../services/api/interfaces/top_airing_anime'

const TopAiringAnime = () => {
  const $taa: TAA = useStore(top_airing_anime)
  return (
    <section class=''>
      {$taa.data.map((data) => (
        <section>
          <img src={data.images.webp.small_image_url} alt='' />
          <section>
            <p>{data.title}</p>
            <p>{data.rank}</p>
          </section>
        </section>
      ))}
    </section>
  )
}

export default TopAiringAnime
