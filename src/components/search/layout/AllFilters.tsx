import FloatingPanel from '../../core/ui/FloatingPanel'
import Filter from './Filter'

const AllFilters = () => {
  return (
    <article class='p-4 flex flex-col gap-2 bg-gray-800 relative' style={{ gridArea: 'filter' }}>
      <section className='flex items-center justify-center p-2'>
        <h2 className='font-basicaline text-2xl text-center'>AniDex</h2>
      </section>
      <Filter />

      <section style={{ display: 'none' }}>
        <FloatingPanel />
      </section>
    </article>
  )
}

export default AllFilters
