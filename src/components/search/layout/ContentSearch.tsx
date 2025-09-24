import useSearch from '../../../utils/hooks/useSearch'

const ContentSearch = () => {
  const { query, applyFilter } = useSearch()

  return (
    <article className='flex flex-col gap-4 p-4 sm:items-center justify-center'>
      <section class='flex flex-col sm:flex-row gap-4 sm:w-110 lg:w-140 sm:align-center'>
        <input
          type='text'
          value={query.get}
          onKeyUp={(e) => (e.key == 'Enter' ? applyFilter() : null)}
          onChange={(e) => query.set((e.target as HTMLInputElement).value)}
          placeholder='Search for anime, manga or seasons...'
          className='w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary'
        />
        <button className='px-4 py-2 bg-primary text-black rounded-md' onClick={() => applyFilter()}>
          Search
        </button>
      </section>
    </article>
  )
}

export default ContentSearch
