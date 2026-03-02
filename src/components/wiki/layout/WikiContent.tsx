import { useEffect } from 'preact/hooks'
import useWiki from '../../../utils/hooks/useWiki'
import WikiCard from './WikiCard'
import TitleVariants from '../ui/TitleVariants'
import AnimeTrailer from '../ui/AnimeTrailer'
import ContentDetails from './ContentDetails'
import ProductionStats from './ProductionStats'
import StoryDetails from '../ui/StoryDetails'

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
          <ContentDetails />
        </section>

        <section>
          <AnimeTrailer />
          <ProductionStats />
        </section>
      </article>

      <article className='max-w-400 mx-auto p-4 grid grid-cols-[570px_1fr_1fr]  gap-4'>
        <StoryDetails />

        <section className='test'>
          <h3>Relations</h3>
        </section>

        <section className='test'>
          <h3>Recommendations</h3>
        </section>
      </article>
    </main>
  )
}

export default WikiContent
