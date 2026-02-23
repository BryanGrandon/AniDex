import { useStore } from '@nanostores/preact'
import { wikiContentCard } from '../../../utils/storage/storage-wiki'

const WikiCard = () => {
  const { type, image, status } = useStore(wikiContentCard)
  return (
    <section className='flex w-80 overflow-x-hidden rounded-xl relative'>
      <h2 className='font-basicaline text-2xl text-center absolute top-0 left-0 right-0 bg-gray-700/70'>{type}</h2>
      <img src={image} alt={`${type} img`} className='w-full' />
      <p className='absolute bottom-0 left-0 right-0 bg-gray-700/70 text-center'>{status}</p>
    </section>
  )
}
export default WikiCard
