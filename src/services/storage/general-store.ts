import { atom } from 'nanostores'
import { getData } from '../api/getData'
import { LIMIT, URL_LEU, URL_SEASONS } from '../constants/api'

export const page = atom(1)
// Create exclusive const for pages page_seasons, page_characters, page_manga, page_anime, page_top

// Call api to get data

export const seasons_now = atom(
  await getData({
    url: `${URL_SEASONS}/now`,
    page: page.get(),
    limit: LIMIT,
  })
)

export const latest_Episodes_Updates = atom(
  await getData({
    url: URL_LEU,
    page: page.get(),
    limit: LIMIT,
  })
)
