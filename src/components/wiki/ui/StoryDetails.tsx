import { useStore } from '@nanostores/preact'
import { storyDetails } from '../../../utils/storage/storage-wiki'

const StoryDetails = () => {
  const allStory = useStore(storyDetails)
  const story = allStory.filter((detail) => detail.value.length > 0)

  return (
    <article className='flex flex-col gap-4  test'>
      {story.map((detail) => (
        <section key={detail.label} className='mb-4'>
          <h3 className='text-xl font-semibold font-basicaline mb-2'>{detail.label}</h3>
          <p className='text-gray-300 prose max-h-42 overflow-auto pr-1'>{detail.value}</p>
        </section>
      ))}
    </article>
  )
}

export default StoryDetails
