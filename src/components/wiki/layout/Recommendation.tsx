import { useStore } from '@nanostores/preact'
import { recommendations } from '../../../utils/storage/storage-wiki'
import Title from '../../core/ui/Title'

const Recommendation = () => {
  const recommendationsData = useStore(recommendations)

  return (
    <article className='max-w-400 mx-auto flex gap-4 w-full'>
      {recommendationsData?.length > 0 ? (
        <section className=' rounded-xl flex flex-col gap-4 overflow-hidden'>
          <Title text='Recommendations' />
          <article class='relative flex flex-wrap justify-center gap-4'>
            {recommendationsData?.map((data) => (
              <section className='w-44'>
                <img src={data.entry.images.webp.large_image_url} alt={data.entry.title} className='overflow-hidden rounded-xl object-fit' />
                <abbr title={data.entry.title} className='no-underline'>
                  <h3 className='overflow-hidden whitespace-nowrap text-ellipsis text-sm text-gray-400'>{data.entry.title}</h3>
                </abbr>
              </section>
            ))}
          </article>
        </section>
      ) : null}
    </article>
  )
}

export default Recommendation
