import { useStore } from '@nanostores/preact'
import { animeProductionStats } from '../../../utils/storage/storage-wiki'
import { InfoItem } from '../ui/InfoItem'
import { TagList } from '../ui/TagList'

const AnimeProductionStats = () => {
  const { studios, score, ranked, popularity, streaming } = useStore(animeProductionStats)

  const array = [
    { label: 'Score', value: score },
    { label: 'Ranked', value: ranked },
    { label: 'Popularity', value: popularity },
  ]

  return (
    <section className='flex flex-col gap-2'>
      <TagList label='Studios' items={studios} />
      {array.map((data) => (
        <InfoItem label={data.label} value={data.value} />
      ))}
      <p>
        Streaming:{' '}
        {streaming.map((el, i) => (
          <a href={el.url} target='_blank'>
            {el.name}
            {i < streaming.length - 1 ? ', ' : ''}
          </a>
        ))}
      </p>
    </section>
  )
}

export default AnimeProductionStats
