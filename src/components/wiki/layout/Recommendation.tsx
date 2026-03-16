import { useStore } from '@nanostores/preact'
import { recommendations } from '../../../utils/storage/storage-wiki'
import Title from '../../core/ui/Title'
import useWiki from '../../../utils/hooks/useWiki'

const Recommendation = () => {
  const recommendationsData = useStore(recommendations)
  const { handleMediaSelect, getIDAndType } = useWiki()
  const { TYPE } = getIDAndType()

  return (
    <>
      {recommendationsData?.length > 0 ? (
        <article className='max-w-400 mx-auto flex gap-4 w-full border-gray-500 border rounded-xl p-4'>
          <section className=' rounded-xl flex flex-col gap-4 overflow-hidden'>
            <Title text='Recommendations' />
            <article class='relative flex flex-wrap justify-center gap-4'>
              {recommendationsData?.map((data) => (
                <section className='w-40 cursor-pointer group-hover:scale-105' onClick={() => handleMediaSelect({ id: data.entry.mal_id, type: TYPE ? TYPE : 'anime' })}>
                  <img
                    src={data.entry.images.webp.large_image_url}
                    alt={data.entry.title}
                    className='overflow-hidden rounded-xl object-cover object-top max-h-55 w-40 h-full hover:border-2 hover:border-primary'
                  />
                  <abbr title={data.entry.title} className='no-underline'>
                    <h3 className='overflow-hidden whitespace-nowrap text-ellipsis text-sm text-gray-400'>{data.entry.title}</h3>
                  </abbr>
                </section>
              ))}
            </article>
          </section>
        </article>
      ) : null}
    </>
  )
}

export default Recommendation
