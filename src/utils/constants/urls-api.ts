import { LIMIT_ELEMENT, LIMIT_ELEMENT_ASIDE } from './general-api'

const URL_MOST_POPULAR_MANGA = `https://api.jikan.moe/v4/top/manga?page=1&limit=${LIMIT_ELEMENT_ASIDE}&filter=bypopularity`
const URL_MOST_POPULAR_ANIME = `https://api.jikan.moe/v4/top/anime?page=1&limit=${LIMIT_ELEMENT_ASIDE}&filter=bypopularity`
const URL_TOP_AIRING_ANIME = `https://api.jikan.moe/v4/top/anime?page=1&limit=${LIMIT_ELEMENT_ASIDE}&filter=airing`
const URL_CURRENT_SEASON = `https://api.jikan.moe/v4/seasons/now?page=1&limit=${LIMIT_ELEMENT}`

export { URL_MOST_POPULAR_MANGA, URL_MOST_POPULAR_ANIME, URL_TOP_AIRING_ANIME, URL_CURRENT_SEASON }
