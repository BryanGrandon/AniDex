import { wikiAnimeTrailer } from '../../../utils/storage/storage-wiki'
import { useStore } from '@nanostores/preact'
import LiteYouTubeEmbed from 'react-lite-youtube-embed'
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

const AnimeTrailer = () => {
  const { title, youtube_id } = useStore(wikiAnimeTrailer)
  return (
    <section className={'flex flex-col gap-2 '}>
      <h3 className='text-xl font-bold font-basicaline tracking-wide'>Trailer</h3>
      <section className='w-80 rounded-xl overflow-hidden'>
        <LiteYouTubeEmbed id={youtube_id} title={title} />
      </section>
    </section>
  )
}

export default AnimeTrailer
