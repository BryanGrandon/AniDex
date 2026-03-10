import { wikiAnimeTrailer } from '../../../utils/storage/storage-wiki'
import { useStore } from '@nanostores/preact'
import LiteYouTubeEmbed from 'react-lite-youtube-embed'
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'
import Title from '../../core/ui/Title'

const AnimeTrailer = () => {
  const { title, youtube_id } = useStore(wikiAnimeTrailer)
  return (
    <section className={'flex flex-col gap-2'}>
      <Title text='Trailer' />
      <section className='w-80 rounded-xl overflow-hidden'>
        <LiteYouTubeEmbed id={youtube_id} title={title} />
      </section>
    </section>
  )
}

export default AnimeTrailer
