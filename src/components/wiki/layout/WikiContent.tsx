import { useEffect } from 'preact/hooks'
import useWiki from '../../../utils/hooks/useWiki'
import AnimeTrailer from '../ui/AnimeTrailer'
import ProductionStats from './ProductionStats'
import Recommendation from './Recommendation'
import PosterContent from './PosterContent'
import MainContent from './MainContent'
import Title from '../../core/ui/Title'

const WikiContent = () => {
  const { getDataWiki, getIDAndType } = useWiki()
  const { ID, TYPE } = getIDAndType()

  useEffect(() => {
    getDataWiki()
  }, [])

  return (
    <>
      <article className='grid grid-cols-1 md:grid-cols-[260px_1fr] lg:grid-cols-[260px_1fr_2px_320px] gap-4 md:gap-10 p-4 rounded-xl border border-gray-500'>
        <article>
          <PosterContent />
        </article>

        <article className='flex flex-col gap-5 lg:gap-10'>
          <MainContent />
        </article>

        <div className='w-0.5 bg-gray-700 hidden lg:flex ' />

        <section className='flex flex-col gap-4 md:grid-span-2 lg:grid-spam-1'>
          {TYPE === 'anime' ? <AnimeTrailer /> : null}
          {TYPE === 'manga' ? <Title text='Production Stats' /> : null}
          <ProductionStats />
        </section>
      </article>
      <Recommendation />
    </>
  )
}

export default WikiContent
