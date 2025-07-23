import { LIMIT_CONTENT, LIMIT_CONTENT_ASIDE } from './api'

const URL_MOST_POPULAR_MANGA = `https://api.jikan.moe/v4/top/manga?page=1&limit=${LIMIT_CONTENT_ASIDE}&filter=bypopularity`
const URL_MOST_POPULAR_ANIME = `https://api.jikan.moe/v4/top/anime?page=1&limit=${LIMIT_CONTENT_ASIDE}&filter=bypopularity`
const URL_TOP_AIRING_ANIME = `https://api.jikan.moe/v4/top/anime?page=1&limit=${LIMIT_CONTENT_ASIDE}&filter=airing`

export { URL_MOST_POPULAR_MANGA, URL_MOST_POPULAR_ANIME, URL_TOP_AIRING_ANIME }
