import { useStore } from '@nanostores/preact'
import { top_airing_anime } from '../../../services/storage/general-store'
import type { TAA } from '../../../services/api/interfaces/top_airing_anime'

const TopAiringAnime = () => {
  const $taa: TAA = useStore(top_airing_anime)
  // Max 7
  return (
    <section className='flex flex-col gap-2'>
      {$taa?.data?.map((data) => (
        <section className='flex test gap-4 px-4'>
          <p>1</p>
          <img src={data.images.webp.large_image_url} alt='' className='h-20 w-15 rounded object-cover' />
          <section className=''>
            <p>{data.title}</p>
          </section>
        </section>
      ))}
    </section>
  )
}

export default TopAiringAnime
