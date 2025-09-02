import { useState } from 'preact/hooks'
import json from '../../data.json'
import { useStore } from '@nanostores/preact'
import { search } from '../storage/storage-search'

const useSearch = (thisIs: string) => {
  const data = thisIs == 'anime' ? json.search.anime : json.search.manga

  const dateStart = new Date('1988-01-01').getFullYear()
  const now = new Date().getFullYear()

  let years = []
  for (let i = dateStart; i <= now; i++) years.push(i)
  years.push('view all')
  years = years.reverse()

  // Filter Options

  const [type, setType] = useState(data.types[0])
  const [status, setStatus] = useState(data.status[0])
  const [orderBy, setOrderBy] = useState(data.order_by[0])
  const [sort, setSort] = useState(data.sort[0])
  const [sfw, setSfw] = useState(data.sfw[0])
  const [year, setYear] = useState('view all')

  const filter = {
    type: {
      get: type,
      set: (value: string) => setType(value),
      data: data.types,
    },
    status: {
      get: status,
      set: (value: string) => setStatus(value),
      data: data.status,
    },
    orderBy: {
      get: orderBy,
      set: (value: string) => setOrderBy(value),
      data: data.order_by,
    },
    sort: {
      get: sort,
      set: (value: string) => setSort(value),
      data: data.sort,
    },
    sfw: {
      get: sfw,
      set: (value: string) => setSfw(value),
      data: data.sfw,
    },
    year: {
      get: year,
      set: (value: string) => setYear(value),
      data: years,
    },
  }

  // Query

  const [querySearch, setQuerySearch] = useState('')

  const query = {
    get: querySearch,
    set: (value: string) => setQuerySearch(value),
  }

  // Search

  const url = useStore(search)

  // handler Clicks

  const allFilterOptions = {
    type: type != data.types[0] ? `&type=${type}` : '',
    status: status != data.status[0] ? `&status=${status}` : '',
    orderBy: orderBy != data.order_by[0] ? `&order_by=${orderBy}` : '',
    sort: sort != data.sort[0] ? `&sort=${sort}` : '',
    sfw: sfw != data.sfw[0] ? `&sfw=${sfw}` : '',
    year: year != 'view all' ? `&year=${year}` : '',
    query: query.get != '' ? `&q=${query.get}` : '',
  }

  const applyFilter = () => {
    const { type, status, orderBy, sort, sfw, year } = allFilterOptions
    search.set(`https://api.jikan.moe/v4/${thisIs}?${type}${status}${orderBy}${sort}${sfw}${year}`)
  }

  // All

  return { filter, url, applyFilter }
}

export default useSearch
