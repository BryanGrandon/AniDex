import SelectFilter from '../ui/SelectFilter'
import useSearch from '../../../utils/hooks/useSearch'

const Filter = () => {
  const { filter } = useSearch('anime')
  const { type, sfw, sort, status, orderBy, year } = filter

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
        <summary className='test'>Genres</summary>
      </details>
      <details className=''>
        <summary className='test'>Genres</summary>
      </details>
    </>
  )
}

export default Filter
