import { useState } from 'preact/hooks'
import { searchQuery } from '../../utils/storage/storage-search'

const Search = () => {
  const [query, setQuery] = useState<string>('')

  const handleClickSearch = () => searchQuery.set(query)

  return (
    <section class='flex flex-col sm:flex-row gap-4 sm:w-140 sm:align-center'>
      <input
        type='text'
        value={query}
        onChange={(e) => setQuery((e.target as HTMLInputElement).value)}
        onKeyDown={(e) => {
          if (e.key == 'Enter') handleClickSearch()
        }}
        placeholder='Search for anime...'
        class='w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary'
      />
      <button class='px-4 py-2 bg-primary text-black rounded-md' onClick={handleClickSearch}>
        Search
      </button>
    </section>
  )
}

export default Search
