import { useEffect } from 'preact/hooks'
import useWiki from '../../../utils/hooks/useWiki'
import AnimeTrailer from '../ui/AnimeTrailer'
import ProductionStats from './ProductionStats'
import Recommendation from './Recommendation'
import PosterContent from './PosterContent'
import MainContent from './MainContent'

const WikiContent = () => {
  const { getDataWiki, getIDAndType } = useWiki()

  useEffect(() => {
    getDataWiki()
  }, [])

  return (
    <>
      <article className='grid grid-cols-[260px_1fr_320px] gap-10 p-4 test '>
        <article>
          <PosterContent />
        </article>

        <article className='flex flex-col gap-5 lg:gap-10'>
          <MainContent />
        </article>

        <section className='flex flex-col gap-4'>
          <AnimeTrailer />
          <ProductionStats />
        </section>
      </article>
      <Recommendation />
    </>
  )
}

export default WikiContent
