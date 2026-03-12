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
    <article className='grid grid-cols-[260px_1fr_320px] gap-5 p-4 test '>
      <article>
        <WikiCard />
      </article>

      <article className='flex flex-col gap-5 lg:gap-10'>
        <TitleVariants />
        <ContentDetails />
        <StoryDetails />
        <Relations />
        <Recommendation />
      </article>

      <section className='flex flex-col gap-4'>
        <AnimeTrailer />
        <ProductionStats />
      </section>
    </article>
  )
}

export default WikiContent
