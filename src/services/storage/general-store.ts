import { atom } from 'nanostores'
import { getData } from '../api/getData'
import { LIMIT, URL_SEASONS } from '../constants/api'

export const page = atom(1)
// Create exclusive const for pages page_seasons, page_characters, page_manga, page_anime, page_top

const dataSeasons = {
  url: `${URL_SEASONS}/now`,
  page: page.get(),
  limit: LIMIT,
}

// Call api to get data

export const seasons_now = atom(await getData(dataSeasons))
