import { useStore } from '@nanostores/preact'
import { latest_Episodes_Updates } from '../../../../services/storage/general-store'
import type { LEU } from '../../../../services/api/interfaces/Latest_Episodes_Updates'

const LatestEpisodesUpdates = () => {
  const $leu: LEU = useStore(latest_Episodes_Updates)

  return (
    <article>
      <h2>Latest Episodes Updates</h2>

      <article className='flex flex-wrap gap-4'>
        {$leu.data.map((data) => (
          <div className='w-40 test h-60 relative overflow-hidden'>
            <h2 className='overflow-hidden text-ellipsis whitespace-nowrap'>{data.entry.title}</h2>
            <img src={data.entry.images.webp.large_image_url} alt='' className='object-contain h-40 w-full object-top' />
            <p>{data.episodes[0].title}</p>
          </div>
        ))}
      </article>
    </article>
  )
}

export default LatestEpisodesUpdates
