import { useEffect, useState } from 'preact/hooks'
import useWiki from '../../../utils/hooks/useWiki'
import type { specific_wiki_about_anime } from '../../../utils/interfaces/wiki/anime-wiki'
import type { specific_wiki_about_manga } from '../../../utils/interfaces/wiki/manga-wiki'
import type { recommendation_wiki } from '../../../utils/interfaces/wiki/recommendation-wiki'
import WikiParagraph from '../ui/WikiParagraph'

import WikiCard from './WikiCard'
import TitleVariants from '../ui/TitleVariants'
import AnimeTrailer from '../ui/AnimeTrailer'
import AnimeContentDetails from './AnimeContentDetails'
import AnimeProductionStats from './AnimeProductionStats'

const WikiContent = () => {
  const [wiki, setWiki] = useState<specific_wiki_about_anime | specific_wiki_about_manga>()
  const [recommendations, setRecommendations] = useState<recommendation_wiki>()
  const { getDataWiki, getIDAndType } = useWiki()

  useEffect(() => {
    getDataWiki()
  }, [])

  return (
    <main className='p-4'>
      <article className='max-w-400 mx-auto flex flex-col lg:flex-row p-4 gap-10'>
        <WikiCard />

        <section className='flex flex-col gap-4'>
          <TitleVariants />

          <AnimeContentDetails />
        </section>

        <section>
          <AnimeTrailer />
          <AnimeProductionStats />
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
