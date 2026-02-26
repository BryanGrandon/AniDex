import { useEffect } from 'preact/hooks'
import useWiki from '../../../utils/hooks/useWiki'
import WikiParagraph from '../ui/WikiParagraph'

import WikiCard from './WikiCard'
import TitleVariants from '../ui/TitleVariants'
import AnimeTrailer from '../ui/AnimeTrailer'
import AnimeContentDetails from './AnimeContentDetails'
import AnimeProductionStats from './AnimeProductionStats'

const WikiContent = () => {
  const { getDataWiki, getIDAndType } = useWiki()

  useEffect(() => {
    getDataWiki()
  }, [])

  return (
    <main className='p-4'>
      <article className='max-w-400 mx-auto grid grid-cols-4 lg:flex-row p-4 gap-10 test'>
        <WikiCard />

        <section className='flex flex-col gap-4 col-span-2'>
          <TitleVariants />
          <AnimeContentDetails />
        </section>

        <section>
          <AnimeTrailer />
          <AnimeProductionStats />
        </section>
      </article>

      <article>
        <section className='grid grid-cols-2 gap-4 p-4'>
          <WikiParagraph title='Synopsis' paragraph={'sss'} />
          <WikiParagraph title='Background' paragraph={'sdad'} />
        </section>

        <section>
          <h3>Relations</h3>
        </section>

        <section>
          <h3>Recommendations</h3>
        </section>
      </article>
    </main>
  )
}

export default WikiContent
