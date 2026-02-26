import { useStore } from '@nanostores/preact'
import { contentDetails } from '../../../utils/storage/storage-wiki'
import { InfoItem } from '../ui/InfoItem'
import { TagList } from '../ui/TagList'

const AnimeContentDetails = () => {
  const items = useStore(contentDetails)

  return (
    <section className='flex flex-col gap-2'>
      {items.map((item) => (
        <>
          {!item.forList ? (
            <InfoItem key={item.label} label={item.label} value={item.value ? item.value : 'N/A'} />
          ) : (
            <TagList label={item.label} items={Array.isArray(item.value) ? item.value : []} />
          )}
        </>
      ))}
    </section>
  )
}

export default AnimeContentDetails
