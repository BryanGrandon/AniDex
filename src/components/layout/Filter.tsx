import { useState } from 'preact/hooks'
import data from '../../data.json'
import SelectFilter from '../ui/SelectFilter'

const Filter = () => {
  const filterData = data.search.anime
  const [type, setType] = useState(filterData.types[0])
  const [status, setStatus] = useState(filterData.status[0])
  const [orderBy, setOrderBy] = useState(filterData.order_by[0])
  const [sort, setSort] = useState(filterData.sort[0])
  const [sfw, setSfw] = useState(filterData.sfw[0])
  const [year, setYear] = useState('')

  const dateStart = new Date('1988-01-01')
  const now = new Date()

  const startYear = dateStart.getFullYear()
  const endYear = now.getFullYear()

  let years = []
  for (let i = startYear; i <= endYear; i++) {
    years.push(i)
  }
  years = years.reverse()

  return (
    <article className='flex flex-col gap-2 max-w-60'>
      <SelectFilter title='Type:' theClassMain='filter-type' callbacks={setType} array={filterData.types} highlight={type} />
      <SelectFilter title='Status:' theClassMain='filter-status' callbacks={setStatus} array={filterData.status} highlight={status} />
      <SelectFilter title='Order by:' theClassMain='filter-order_by' callbacks={setOrderBy} array={filterData.order_by} highlight={orderBy} />
      <SelectFilter title='Sort:' theClassMain='filter-sort' callbacks={setSort} array={filterData.sort} highlight={sort} />
      <SelectFilter title='SFW:' theClassMain='filter-sfw' callbacks={setSfw} array={filterData.sfw} highlight={sfw} />
      <SelectFilter title='Year:' theClassMain='filter-years' callbacks={setYear} array={years} highlight={year} />
    </article>
  )
}

export default Filter
