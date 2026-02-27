import { useStore } from '@nanostores/preact'
import { productionStats, streaming } from '../../../utils/storage/storage-wiki'
import { InfoItem } from '../ui/InfoItem'
import { TagList } from '../ui/TagList'

const ProductionStats = () => {
  const items = useStore(productionStats)
  const stream = useStore(streaming)

  return (
    <section className='flex flex-col gap-2'>
      {items.map((item) => (
        <>
          {item.forList ? <TagList label={item.label} items={Array.isArray(item.value) ? item.value : []} /> : <InfoItem key={item.label} label={item.label} value={item.value ? item.value : 'N/A'} />}
        </>
      ))}
      {/* Create a component for streaming links */}
      <p>
        {stream.label}:{' '}
        {stream.items.map((el, i) => (
          <a href={el.url} target='_blank'>
            {el.name}
            {i < stream.items.length - 1 ? ', ' : ''}
          </a>
        ))}
      </p>
    </section>
  )
}

export default ProductionStats
