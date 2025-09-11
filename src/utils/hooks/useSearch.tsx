import { useState } from 'preact/hooks'
import json from '../../data.json'
import { useStore } from '@nanostores/preact'
import { search, searchApproach, searchPage } from '../storage/storage-search'
import { TYPES_OF_GENRES } from '../constants/type-of-genres'
import type { pagination } from '../interfaces/pagination'

const useSearch = () => {
  const data = searchApproach.get() == 'anime' ? json.search.anime : searchApproach.get() == 'manga' ? json.search.manga : json.search.manga

  let years = []
  for (let i = new Date('1988-01-01').getFullYear(); i <= new Date().getFullYear(); i++) years.unshift(i)
  years.unshift('view all')
  // years = years.reverse()

  const { types, status, sfw, sort, date, order_by } = data

  // Filter Options
  const [mediaType, setMediaType] = useState(types.value_default)
  const [mediaStatus, setMediaStatus] = useState(status.value_default)
  const [orderField, setOrderField] = useState(order_by.value_default)
  const [sortDirection, setSortDirection] = useState(sort.value_default)
  const [safeMode, setSafeMode] = useState(sfw.value_default)
  const [releaseYear, setReleaseYear] = useState(date.value_default)
  const [includedGenres, setIncludedGenres] = useState<number[]>([])
  const [excludedGenres, setExcludedGenres] = useState<number[]>([])

  const filter = {
    type: {
      get: mediaType,
      set: (value: string) => setMediaType(value),
      data: types.values,
    },
    status: {
      get: mediaStatus,
      set: (value: string) => setMediaStatus(value),
      data: status.values,
    },
    orderBy: {
      get: orderField,
      set: (value: string) => setOrderField(value),
      data: order_by.values,
    },
    sort: {
      get: sortDirection,
      set: (value: string) => setSortDirection(value),
      data: sort.values,
    },
    sfw: {
      get: safeMode,
      set: (value: string) => setSafeMode(value),
      data: sfw.values,
    },
    year: {
      get: releaseYear,
      set: (value: string) => setReleaseYear(value),
      data: years,
    },
    genres: {
      data: [...TYPES_OF_GENRES.genres, ...TYPES_OF_GENRES.explicit_genres, ...TYPES_OF_GENRES.themes],
      set: (el: number) => {
        const check = includedGenres.some((e) => e === el)
        if (check) {
          const newArray = includedGenres.filter((e) => e !== el)
          setIncludedGenres(newArray)
        } else setIncludedGenres([...includedGenres, el])
      },
    },
    genresExclude: {
      set: (el: number) => {
        const check = excludedGenres.some((e) => e === el)
        if (check) {
          const newArray = excludedGenres.filter((e) => e !== el)
          setExcludedGenres(newArray)
        } else setExcludedGenres([...excludedGenres, el])
      },
    },
  }

  // Query
  const [querySearch, setQuerySearch] = useState('')

  const query = {
    get: querySearch,
    set: (value: string) => {
      setQuerySearch(value)
    },
  }

  // Apply filters
  const allFilterOptions = {
    type: mediaType != types.value_default ? `&type=${mediaType}` : '',
    status: mediaStatus != status.value_default ? `&status=${mediaStatus}` : '',
    orderBy: orderField != order_by.value_default ? `&order_by=${orderField}` : '',
    sort: sortDirection != sort.value_default ? `&sort=${sortDirection}` : `&sort${sort.value_default}`,
    sfw: safeMode != sfw.value_default ? `&sfw=${safeMode}` : `&sfw=${sfw.value_default}`,
    year: releaseYear != date.value_default ? `&year=${releaseYear}` : '',
    query: query.get != '' ? `&q=${query.get}` : '',
    genres: includedGenres.length > 0 ? `&genres=${includedGenres.join(',')}` : '',
    genresExclude: excludedGenres.length > 0 ? `&genres_exclude=${excludedGenres.join(',')}` : '',
  }

  // Navigation buttons
  const [pagination, setPagination] = useState<pagination>({
    last_visible_page: 0,
    has_next_page: false,
    current_page: 0,
    items: {
      count: 0,
      total: 0,
      per_page: 0,
    },
  })

  const navigation = {
    general: (value: pagination) => setPagination(value),
    prev: {
      isDisabled: !(pagination.current_page > 1),
      click: () => {
        if (pagination.current_page > 1) {
          searchPage.set(searchPage.get() - 1)
          applyFilter()
        }
      },
    },
    next: {
      isDisabled: !pagination?.has_next_page,
      click: () => {
        if (pagination?.has_next_page) {
          searchPage.set(searchPage.get() + 1)
          applyFilter()
        }
      },
    },
  }

  // Apply Filters
  const applyFilter = () => {
    const { type, status, orderBy, sort, sfw, year, genres, genresExclude, query } = allFilterOptions
    const url = `https://api.jikan.moe/v4/${searchApproach.get()}?page=${searchPage.get()}&limit=20${type}${status}${orderBy}${sort}${sfw}${year}${genres}${genresExclude}${query}`
    search.set(url)
  }

  // Reset Filters
  const resetFilter = () => {
    setMediaType(types.value_default)
    setMediaStatus(status.value_default)
    setOrderField(order_by.value_default)
    setSortDirection(sort.value_default)
    setSafeMode(sfw.value_default)
    setReleaseYear(date.value_default)
    document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
      ;(checkbox as HTMLInputElement).checked = false
    })
    setIncludedGenres([])
    setExcludedGenres([])
  }

  // Search Approach
  const [assignSearch, setAssignSearch] = useState('anime')

  const assignSearchApproach = {
    get: assignSearch,
    set: (val: string) => {
      searchApproach.set(val)
      setAssignSearch(val)
      resetFilter()
      applyFilter()
    },
  }

  return { filter, applyFilter, assignSearchApproach, query, resetFilter, navigation }
}

export default useSearch
