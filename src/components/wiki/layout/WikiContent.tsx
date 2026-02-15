import { useEffect, useState } from 'preact/hooks'
import useWiki from '../../../utils/hooks/useWiki'
import type { specific_wiki_about_anime } from '../../../utils/interfaces/wiki/anime-wiki'
import type { specific_wiki_about_manga } from '../../../utils/interfaces/wiki/manga-wiki'
import type { recommendation_wiki } from '../../../utils/interfaces/wiki/recommendation-wiki'
import WikiContentTitles from '../ui/WikiContentTitles'
import WikiParagraph from '../ui/WikiParagraph'

import LiteYouTubeEmbed from 'react-lite-youtube-embed'
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

const WikiContent = () => {
  const [wiki, setWiki] = useState<specific_wiki_about_anime | specific_wiki_about_manga>()
  const [recommendations, setRecommendations] = useState<recommendation_wiki>()
  const { getDataWiki, getIDAndType } = useWiki()

  const { ID, TYPE } = getIDAndType()

  const [wikiAnime, setWikiAnime] = useState<specific_wiki_about_anime>()

  const getData = async () => {
    const { data, recommendation } = await getDataWiki()
    setRecommendations(recommendation)
    TYPE == 'anime' ? setWikiAnime(data) : null
    setWiki(data)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <main className='p-4'>
      <article className='max-w-400 mx-auto flex flex-col lg:flex-row p-4 gap-10'>
        <section>
          <h2 className='font-basicaline text-2xl text-center'>{TYPE}</h2>
          <picture className='flex w-80 overflow-x-hidden rounded-xl test'>
            <img src={wiki?.image} alt='' className='w-full' />
          </picture>
          <p>{wiki?.status}</p>
        </section>

        <section className='flex flex-col gap-4'>
          <WikiContentTitles title={wiki?.title ? wiki?.title : ''} alternativeTitles={wiki?.alternative_titles ? wiki?.alternative_titles : ['']} />

          <section>
            <h3>Genres</h3>
            <p>
              {wiki?.primaryList.genres.map((genre) => (
                <span>{genre}</span>
              ))}
            </p>
          </section>
        </section>

        <section>
          <section>
            <h3>Trailer</h3>
            <LiteYouTubeEmbed id={wiki} title={wikiAnime?.youtube_id} poster='maxresdefault' />
          </section>
        </section>
      </article>

      <section className='grid grid-cols-2 gap-4 p-4'>
        <WikiParagraph title='Synopsis' paragraph={wiki?.synopsis ? wiki?.synopsis : ''} />
        <WikiParagraph title='Background' paragraph={wiki?.background ? wiki?.background : ''} />
      </section>
    </main>
  )
}

export default WikiContent
