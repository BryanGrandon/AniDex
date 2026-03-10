import { useEffect } from 'preact/hooks'
import useWiki from '../../../utils/hooks/useWiki'
import WikiCard from './WikiCard'
import TitleVariants from '../ui/TitleVariants'
import AnimeTrailer from '../ui/AnimeTrailer'
import ContentDetails from './ContentDetails'
import ProductionStats from './ProductionStats'
import StoryDetails from '../ui/StoryDetails'
import Relations from './Relations'
import Recommendation from './Recommendation'

const WikiContent = () => {
  const { getDataWiki, getIDAndType } = useWiki()

  useEffect(() => {
    getDataWiki()
  }, [])

  return (
    <main className='flex flex-col gap-5 p-4'>
      <article className='max-w-400 mx-auto flex flex-col gap-5 lg:grid lg:grid-cols-4 lg:gap-10'>
        <WikiCard />

        <section className='flex flex-col gap-4 col-span-2'>
          <TitleVariants />
          <ContentDetails />
        </section>

        <section className='flex flex-col gap-4'>
          <AnimeTrailer />
          <ProductionStats />
        </section>
      </article>

      <article className='max-w-400 mx-auto grid grid-cols-1 lg:grid-cols-[570px_1fr] gap-4'>
        <StoryDetails />

        <Relations />
      </article>

      <Recommendation />
    </main>
  )
}

export default WikiContent
