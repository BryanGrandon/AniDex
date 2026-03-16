import { useStore } from '@nanostores/preact'
import { productionStats, streaming } from '../../../utils/storage/storage-wiki'
import { InfoItem } from '../ui/InfoItem'
import { TagList } from '../ui/TagList'
import useWiki from '../../../utils/hooks/useWiki'

const ProductionStats = () => {
  const allStats = useStore(productionStats)
  const items = allStats.filter((item) => item.forList != true)
  const list = allStats.filter((item) => item.forList == true)
  const stream = useStore(streaming)
  const { getIDAndType } = useWiki()
  const { ID, TYPE } = getIDAndType()

  return (
    <section className='flex flex-col gap-2'>
      {list.map((item) => (
        <TagList label={item.label} items={Array.isArray(item.value) ? item.value : []} />
      ))}

      {items.map((item) => (
        <InfoItem key={item.label} label={item.label} value={item.value ? item.value : 'N/A'} />
      ))}

      {/* Create a component for streaming links */}
      {TYPE == 'anime' ? (
        <p>
          {stream.label}:{' '}
          {stream.items.map((el, i) => (
            <a href={el.url} target='_blank'>
              {el.name}
              {i < stream.items.length - 1 ? ', ' : ''}
            </a>
          ))}
        </p>
      ) : null}
    </section>
  )
}

export default ProductionStats
