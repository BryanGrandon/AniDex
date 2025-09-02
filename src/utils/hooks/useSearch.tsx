import json from '../../data.json'
import { useStore } from '@nanostores/preact'
import { searchOptions, searchQuery } from '../storage/storage-search'

const useSearch = (thisIs: string) => {
  const data = thisIs == 'anime' ? json.search.anime : json.search.manga
  let { type, status, orderBy, sort, sfw, year } = useStore(searchOptions) // filterOptions

  type checking = {
    check: string
    defaultValue: string
  }

  //   check if  there is a better function
  const checking = ({ check, defaultValue }: checking) => {
    return check == '' ? defaultValue : check
  }

  // Create Object : filterOptions
  type = checking({ check: type, defaultValue: data.types[0] })
  status = checking({ check: status, defaultValue: data.status[0] })
  orderBy = checking({ check: orderBy, defaultValue: data.order_by[0] })
  sort = checking({ check: sort, defaultValue: data.sort[0] })
  sfw = checking({ check: sfw, defaultValue: data.sfw[0] })
  year = checking({ check: year, defaultValue: 'view all' })

  const dateStart = new Date('1988-01-01').getFullYear()
  const now = new Date().getFullYear()

  let years = []
  for (let i = dateStart; i <= now; i++) years.push(i)
  years.push('view all')
  years = years.reverse()

  // Filter Data
  const getData = {
    types: data.types,
    status: data.status,
    order_by: data.order_by,
    sort: data.sort,
    sfw: data.sfw,
    years: years,
  }

  const update = {
    setType: (value: string) => searchOptions.set({ type: value, status, orderBy, sort, sfw, year }),
    setStatus: (value: string) => searchOptions.set({ type, status: value, orderBy, sort, sfw, year }),
    setOrderBy: (value: string) => searchOptions.set({ type, status, orderBy: value, sort, sfw, year }),
    setSort: (value: string) => searchOptions.set({ type, status, orderBy, sort: value, sfw, year }),
    setSfw: (value: string) => searchOptions.set({ type, status, orderBy, sort, sfw: value, year }),
    setYear: (value: string) => searchOptions.set({ type, status, orderBy, sort, sfw, year: value }),
  }

  // Query

  const query = {
    get: useStore(searchQuery),
    set: (value: string) => searchQuery.set(value),
  }

  // All

  const allFilterOptions = {
    type: type != data.types[0] ? `&type=${type}` : '',
    status: status != data.status[0] ? `&status=${status}` : '',
    orderBy: orderBy != data.order_by[0] ? `&order_by=${orderBy}` : '',
    sort: sort != data.sort[0] ? `&sort=${sort}` : '',
    sfw: sfw != data.sfw[0] ? `&sfw=${sfw}` : '',
    year: year != 'view all' ? `&year=${year}` : '',
    query: query.get != '' ? `&q=${query.get}` : '',
  }

  return { type, status, orderBy, sort, sfw, year, update, getData }
}

export default useSearch
