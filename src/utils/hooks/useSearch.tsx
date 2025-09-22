import { useState } from 'preact/hooks'
import json from '../../data.json'
import { mediaStatusSelected, mediaTypeSelected, orderFieldSelected, releaseYearSelected, safeModeSelected, search, searchApproach, searchPage, sortDirectionSelected } from '../storage/storage-search'
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
  const [mediaType, setMediaType] = useState(data.types.value_default)
  const [mediaStatus, setMediaStatus] = useState(status.value_default)
  const [orderField, setOrderField] = useState(order_by.value_default)
  const [sortDirection, setSortDirection] = useState(sort.value_default)
  const [safeMode, setSafeMode] = useState(sfw.value_default)
  const [releaseYear, setReleaseYear] = useState(date.value_default)
  const [includedGenres, setIncludedGenres] = useState<number[]>([])
  const [excludedGenres, setExcludedGenres] = useState<number[]>([])

  const clickType = (value: string) => {
    setMediaType(value)
    mediaTypeSelected.set(value)
  }
  const clickStatus = (value: string) => {
    setMediaStatus(value)
    mediaStatusSelected.set(value)
  }
  const clickOrderBy = (value: string) => {
    setOrderField(value)
    orderFieldSelected.set(value)
  }
  const clickSort = (value: string) => {
    setSortDirection(value)
    sortDirectionSelected.set(value)
  }
  const clickSfw = (value: string) => {
    setSafeMode(value)
    safeModeSelected.set(value)
  }
  const clickYear = (value: string) => {
    setReleaseYear(value)
    releaseYearSelected.set(value)
  }

  const filter = {
    type: {
      set: (value: string) => clickType(value),
      data: data.types.values,
    },
    status: {
      set: (value: string) => clickStatus(value),
      data: status.values,
    },
    orderBy: {
      set: (value: string) => clickOrderBy(value),
      data: order_by.values,
    },
    sort: {
      set: (value: string) => clickSort(value),
      data: sort.values,
    },
    sfw: {
      set: (value: string) => clickSfw(value),
      data: sfw.values,
    },
    year: {
      set: (value: string) => clickYear(value),
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
    sort: sortDirection != sort.value_default ? `&sort=${sortDirection}` : `&sort=${sort.value_default}`,
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
    const url = `https://api.jikan.moe/v4/${searchApproach.get()}?page=${searchPage.get()}&limit=24${type}${status}${orderBy}${sort}${sfw}${year}${genres}${genresExclude}${query}`
    search.set(url)
  }

  // Reset Filters
  const resetFilter = () => {
    const data = searchApproach.get() == 'anime' ? json.search.anime : searchApproach.get() == 'manga' ? json.search.manga : json.search.manga
    const { types, status, sfw, sort, date, order_by } = data

    clickType(types.value_default)
    clickStatus(status.value_default)
    clickOrderBy(order_by.value_default)
    clickSort(sort.value_default)
    clickSfw(sfw.value_default)
    clickYear(date.value_default)

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
