import SelectFilter from '../ui/SelectFilter'
import useSearch from '../../../utils/hooks/useSearch'
import { mediaStatusSelected, mediaTypeSelected, orderFieldSelected, releaseYearSelected, safeModeSelected, sortDirectionSelected } from '../../../utils/storage/storage-search'
import { useEffect } from 'preact/hooks'

const Filter = () => {
  const { filter, applyFilter, resetFilter } = useSearch()
  const { type, sfw, sort, status, orderBy, year, genres, genresExclude } = filter
  const allGenres = genres.data

  useEffect(() => {
    resetFilter()
  }, [])

  return (
    <>
      <details className=''>
        <summary className='px-4 py-2 border rounded border-primary cursor-pointer'>Filter</summary>
        <article className='flex flex-col gap-2 p-4'>
          <SelectFilter title='Type:' theClassMain='filter-type' callbacks={type.set} array={type.data} highlight={mediaTypeSelected.get()} />
          <SelectFilter title='Status:' theClassMain='filter-status' callbacks={status.set} array={status.data} highlight={mediaStatusSelected.get()} />
          <SelectFilter title='Order by:' theClassMain='filter-order_by' callbacks={orderBy.set} array={orderBy.data} highlight={orderFieldSelected.get()} />
          <SelectFilter title='Sort:' theClassMain='filter-sort' callbacks={sort.set} array={sort.data} highlight={sortDirectionSelected.get()} />
          <SelectFilter title='SFW:' theClassMain='filter-sfw' callbacks={sfw.set} array={sfw.data} highlight={safeModeSelected.get()} />
          <SelectFilter title='Year:' theClassMain='filter-years' callbacks={year.set} array={year.data} highlight={releaseYearSelected.get()} />
        </article>
      </details>

      <details className=''>
        <summary className='px-4 py-2 border rounded border-primary cursor-pointer'>Genres</summary>
        <article className='flex flex-col p-4 gap-1 max-h-80 overflow-auto'>
          {allGenres.map((e) => (
            <label className='flex gap-1'>
              <input type='checkbox' name={`genres_id-${e.id}`} onClick={() => genres.set(e.id)} />
              {e.title}
            </label>
          ))}
        </article>
      </details>

      <details className=''>
        <summary className='px-4 py-2 border rounded border-primary cursor-pointer'>Genres Exclude</summary>
        <article className='flex flex-col p-4 gap-1 max-h-80 overflow-auto'>
          {allGenres.map((e) => (
            <label className='flex gap-1'>
              <input type='checkbox' name={`genres_exclude_id-${e.id}`} onClick={() => genresExclude.set(e.id)} />
              {e.title}
            </label>
          ))}
        </article>
      </details>

      <button className='p-2 rounded bg-primary text-black cursor-pointer hover:scale-102 active:scale-95' onClick={applyFilter}>
        Apply Filters
      </button>
      <button className='p-2 rounded bg-secondary hover:scale-102 active:scale-95' onClick={resetFilter}>
        Reset Filters
      </button>
    </>
  )
}

export default Filter
