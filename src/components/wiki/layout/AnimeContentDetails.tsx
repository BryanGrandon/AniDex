import { useStore } from '@nanostores/preact'
import { animeContentDetails } from '../../../utils/storage/storage-wiki'
import { InfoItem } from '../ui/InfoItem'
import { TagList } from '../ui/TagList'

const AnimeContentDetails = () => {
  const { type, episode, duration, year, genres, explicit_genres, themes } = useStore(animeContentDetails)

  const allData = [
    { text: 'Type', value: type },
    { text: 'Episode', value: episode },
    { text: 'Duration', value: duration },
    { text: 'Year', value: year },
  ]

  const genresThemes = [
    { text: 'Themes', array: themes ? themes : [] },
    { text: 'Genres', array: genres ? genres : [] },
    { text: 'Explicit Genres', array: explicit_genres ? explicit_genres : [] },
  ]

  return (
    <section className='flex flex-col gap-2'>
      {allData.map((data) => (
        <InfoItem label={data.text} value={data.value ? data.value : 'N/A'} />
      ))}

      {genresThemes.map((data) => (
        <TagList label={data.text} items={data.array} />
      ))}
    </section>
  )
}

export default AnimeContentDetails
