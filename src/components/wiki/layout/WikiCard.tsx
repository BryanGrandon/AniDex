import { useStore } from '@nanostores/preact'
import { wikiCard } from '../../../utils/storage/storage-wiki'

const WikiCard = () => {
  const { type, image, status } = useStore(wikiCard)
  return (
    <section>
      <h2 className='font-basicaline text-2xl text-center'>{type}</h2>
      <picture className='flex w-80 overflow-x-hidden rounded-xl test'>
        <img src={image} alt='' className='w-full' />
      </picture>
      <p>{status}</p>
    </section>
  )
}

export default WikiCard
