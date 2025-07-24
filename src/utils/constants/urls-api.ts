import { LIMIT_ELEMENT, LIMIT_ELEMENT_ASIDE } from './general-api'

const URL_CURRENT_SEASON = `https://api.jikan.moe/v4/seasons/now?page=1&limit=${LIMIT_ELEMENT}`
const URL_LATEST_EPISODES_UPDATES = `https://api.jikan.moe/v4/watch/episodes?page=1&limit=${LIMIT_ELEMENT}`
const URL_TOP_UPCOMING_ANIME = `https://api.jikan.moe/v4/top/anime?page=1&limit=${LIMIT_ELEMENT}&filter=upcoming`
const URL_TOP_AIRING_ANIME = `https://api.jikan.moe/v4/top/anime?page=1&limit=${LIMIT_ELEMENT_ASIDE}&filter=airing`
const URL_MOST_POPULAR_ANIME = `https://api.jikan.moe/v4/top/anime?page=1&limit=${LIMIT_ELEMENT_ASIDE}&filter=bypopularity`
const URL_MOST_POPULAR_MANGA = `https://api.jikan.moe/v4/top/manga?page=1&limit=${LIMIT_ELEMENT_ASIDE}&filter=bypopularity`

export { URL_MOST_POPULAR_MANGA, URL_MOST_POPULAR_ANIME, URL_TOP_AIRING_ANIME, URL_CURRENT_SEASON, URL_LATEST_EPISODES_UPDATES, URL_TOP_UPCOMING_ANIME }
