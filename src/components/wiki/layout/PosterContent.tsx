import { useStore } from '@nanostores/preact'
import { posterContent } from '../../../utils/storage/storage-wiki'
import { TagList } from '../ui/TagList'

const PosterContent = () => {
  const { image, stats } = useStore(posterContent)
  return (
    <article className='flex flex-col gap-4'>
      <section className=''>
        <section className='flex overflow-x-hidden rounded-xl relative'>
          <h2 className='font-basicaline text-2xl text-center absolute top-0 left-0 right-0 bg-gray-700/70'>{image.type}</h2>
          <img src={image.url} alt={`${image.type} img`} className='w-full' />
          <p className='absolute bottom-0 left-0 right-0 bg-gray-700/70 text-center'>{image.status}</p>
        </section>
      </section>
      <section>
        {stats.map((item) => (
          <TagList label={item.label} items={Array.isArray(item.value) ? item.value : []} />
        ))}
      </section>
    </article>
  )
}

export default PosterContent
