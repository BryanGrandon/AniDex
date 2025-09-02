import SelectFilter from '../ui/SelectFilter'
import useSearch from '../../utils/hooks/useSearch'

const Filter = () => {
  const { type, status, orderBy, sort, sfw, year, update, getData } = useSearch('anime')

  return (
    <article className='flex flex-col gap-2 max-w-60'>
      <SelectFilter title='Type:' theClassMain='filter-type' callbacks={update.setType} array={getData.types} highlight={type} />
      <SelectFilter title='Status:' theClassMain='filter-status' callbacks={update.setStatus} array={getData.status} highlight={status} />
      <SelectFilter title='Order by:' theClassMain='filter-order_by' callbacks={update.setOrderBy} array={getData.order_by} highlight={orderBy} />
      <SelectFilter title='Sort:' theClassMain='filter-sort' callbacks={update.setSort} array={getData.sort} highlight={sort} />
      <SelectFilter title='SFW:' theClassMain='filter-sfw' callbacks={update.setSfw} array={getData.sfw} highlight={sfw} />
      <SelectFilter title='Year:' theClassMain='filter-years' callbacks={update.setYear} array={getData.years} highlight={year} />
    </article>
  )
}

export default Filter
