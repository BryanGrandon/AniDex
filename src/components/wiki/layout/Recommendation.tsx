import { useStore } from '@nanostores/preact'
import { recommendations } from '../../../utils/storage/storage-wiki'
import MiniCard from '../../core/ui/MiniCard'

const Recommendation = () => {
  const recommendationsData = useStore(recommendations)

  return (
    <div>
      {recommendationsData?.length > 0 ? (
        <section className='p-4 rounded-xl flex flex-col gap-4 overflow-hidden overlay glassmorphism'>
          <h2 className='font-basicaline text-2xl relative'>Recommendations</h2>
          <article class='relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {recommendationsData?.map((data) => (
              <MiniCard image={data.entry.images.webp.large_image_url} title={data.entry.title} text={`id: ${data.entry.mal_id}`} id={data.entry.mal_id} type={'anime'} />
            ))}
          </article>
        </section>
      ) : null}
    </div>
  )
}

export default Recommendation
