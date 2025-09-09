import SelectFilter from '../ui/SelectFilter'
import useSearch from '../../../utils/hooks/useSearch'
import { TYPES_OF_GENRES } from '../../../utils/constants/type-of-genres'
import { useState } from 'preact/hooks'

const Filter = () => {
  const { filter } = useSearch('anime')
  const { type, sfw, sort, status, orderBy, year } = filter
  const [genres, setGenres] = useState<number[]>([])
  const [genresExclude, setGenresExclude] = useState<number[]>([])

  const handlerClickGenres = (el: number) => {
    const check = genres.some((e) => e === el)
    if (check) {
      const newArray = genres.filter((e) => e !== el)
      setGenres(newArray)
    } else setGenres([...genres, el])
  }
  const handlerClickGenresExclude = (el: number) => {
    const check = genresExclude.some((e) => e === el)
    if (check) {
      const newArray = genresExclude.filter((e) => e !== el)
      setGenresExclude(newArray)
    } else setGenresExclude([...genresExclude, el])
  }

  const allGenres = [...TYPES_OF_GENRES.genres, ...TYPES_OF_GENRES.explicit_genres, ...TYPES_OF_GENRES.themes]

  return (
    <>
      <details className=''>
        <summary className='test px-4 py-2'>Filter</summary>
        <article className='flex flex-col gap-2 p-4'>
          <SelectFilter title='Type:' theClassMain='filter-type' callbacks={type.set} array={type.data} highlight={type.get} />
          <SelectFilter title='Status:' theClassMain='filter-status' callbacks={status.set} array={status.data} highlight={status.get} />
          <SelectFilter title='Order by:' theClassMain='filter-order_by' callbacks={orderBy.set} array={orderBy.data} highlight={orderBy.get} />
          <SelectFilter title='Sort:' theClassMain='filter-sort' callbacks={sort.set} array={sort.data} highlight={sort.get} />
          <SelectFilter title='SFW:' theClassMain='filter-sfw' callbacks={sfw.set} array={sfw.data} highlight={sfw.get} />
          <SelectFilter title='Year:' theClassMain='filter-years' callbacks={year.set} array={year.data} highlight={year.get} />
        </article>
      </details>
      <details className=''>
        <summary className='test px-4 py-2'>Genres, Explicit Genres, Themes</summary>
        <article className='flex flex-col p-4 gap-1 max-h-100 overflow-auto'>
          {allGenres.map((e) => (
            <label className='flex gap-1'>
              <input type='checkbox' onClick={() => handlerClickGenres(e.id)} />
              {e.title}
            </label>
          ))}
        </article>
      </details>
      <details className=''>
        <summary className='test px-4 py-2'>Genres Exclude</summary>
        <article className='flex flex-col p-4 gap-1 max-h-100 overflow-auto'>
          {allGenres.map((e) => (
            <label className='flex gap-1'>
              <input type='checkbox' onClick={() => handlerClickGenresExclude(e.id)} />
              {e.title}
            </label>
          ))}
        </article>
      </details>
    </>
  )
}

export default Filter
