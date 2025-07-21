import { atom } from 'nanostores'
import { getData } from '../api/getData'
import { LIMIT, URL_CS, URL_LEU, URL_TA } from '../constants/api'

export const page = atom(1)
// Create exclusive const for pages page_seasons, page_characters, page_manga, page_anime, page_top

// Call api to get data
