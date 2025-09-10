import { useEffect, useState } from 'preact/hooks'
import json from '../../data.json'
import { useStore } from '@nanostores/preact'
import { search, searchPage } from '../storage/storage-search'
import { TYPES_OF_GENRES } from '../constants/type-of-genres'
import { getIndividualInfo } from '../../services/api/getIndividualInfo'

const useSearch = (thisIs: string) => {
  const data = thisIs == 'anime' ? json.search.anime : json.search.manga

  let years = []
  for (let i = new Date('1988-01-01').getFullYear(); i <= new Date().getFullYear(); i++) years.push(i)
  years.push('view all')
  years = years.reverse()

  // Filter Options
  const [type, setType] = useState(data.types[0])
  const [status, setStatus] = useState(data.status[0])
  const [orderBy, setOrderBy] = useState(data.order_by[0])
  const [sort, setSort] = useState(data.sort[0])
  const [sfw, setSfw] = useState(data.sfw[0])
  const [year, setYear] = useState('view all')
  const [genres, setGenres] = useState<number[]>([])
  const [genresExclude, setGenresExclude] = useState<number[]>([])

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
    genres: {
      data: [...TYPES_OF_GENRES.genres, ...TYPES_OF_GENRES.explicit_genres, ...TYPES_OF_GENRES.themes],
      set: (el: number) => {
        const check = genres.some((e) => e === el)
        if (check) {
          const newArray = genres.filter((e) => e !== el)
          setGenres(newArray)
        } else setGenres([...genres, el])
      },
    },
    genresExclude: {
      set: (el: number) => {
        const check = genresExclude.some((e) => e === el)
        if (check) {
          const newArray = genresExclude.filter((e) => e !== el)
          setGenresExclude(newArray)
        } else setGenresExclude([...genresExclude, el])
      },
    },
  }

  // Query
  const [querySearch, setQuerySearch] = useState('')
  const query = {
    get: querySearch,
    set: (value: string) => setQuerySearch(value),
  }

  // Apply filters
  const allFilterOptions = {
    type: type != data.types[0] ? `&type=${type}` : '',
    status: status != data.status[0] ? `&status=${status}` : '',
    orderBy: orderBy != data.order_by[0] ? `&order_by=${orderBy}` : '',
    sort: sort != data.sort[0] ? `&sort=${sort}` : '',
    sfw: sfw != data.sfw[0] ? `&sfw=${sfw}` : '',
    year: year != 'view all' ? `&year=${year}` : '',
    query: query.get != '' ? `&q=${query.get}` : '',
    genres: genres.length > 0 ? `&genres=${genres.join(',')}` : '',
    genresExclude: genresExclude.length > 0 ? `&genres_exclude=${genresExclude.join(',')}` : '',
  }

  const numberPage = useStore(searchPage)

  // Search

  const applyFilter = () => {
    const { type, status, orderBy, sort, sfw, year, genres, genresExclude } = allFilterOptions
    const url = `https://api.jikan.moe/v4/${thisIs}?page=${numberPage}&limit=20${type}${status}${orderBy}${sort}${sfw}${year}${genres}${genresExclude}`
    search.set(url)
  }

  const getData = async (url: string) => {
    const json = await getIndividualInfo({ url })
    return json
  }

  return { filter, applyFilter, getData }
}

export default useSearch
