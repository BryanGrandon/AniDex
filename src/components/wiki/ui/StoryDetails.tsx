import { useStore } from '@nanostores/preact'
import { storyDetails } from '../../../utils/storage/storage-wiki'
import Title from '../../core/ui/Title'

const StoryDetails = () => {
  const allStory = useStore(storyDetails)
  const story = allStory.filter((detail) => detail.value.length > 0)

  return (
    <article className='flex flex-col gap-4'>
      {story.map((detail) => (
        <section key={detail.label} className='mb-4 flex flex-col gap-2'>
          <Title text={detail.label} />
          <p className='text-gray-300 prose overflow-auto pr-1'>{detail.value}</p>
        </section>
      ))}
    </article>
  )
}

export default StoryDetails
