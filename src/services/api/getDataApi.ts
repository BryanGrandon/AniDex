import { URL_CURRENT_SEASON, URL_MOST_POPULAR_ANIME, URL_MOST_POPULAR_MANGA, URL_TOP_AIRING_ANIME } from '../../utils/constants/urls-api'
import type { default_data } from './interfaces/default-data'
import type { most_popular_manga } from './interfaces/most-popular-manga'

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms))

const fetchWithDelay = async (urls: string[]) => {
  let allData: any = {}

  for (const url of urls) {
    const res = await fetch(url)
    const data = await res.json()

    if (url == URL_MOST_POPULAR_ANIME) {
      const info: default_data = data
      allData = { getMPA: info }
    } else if (url == URL_MOST_POPULAR_MANGA) {
      const info: most_popular_manga = data
      allData = { ...allData, getMPM: info }
    } else if (url == URL_TOP_AIRING_ANIME) {
      const info: default_data = data
      allData = { ...allData, getTAA: info }
    } else if (url == URL_CURRENT_SEASON) {
      const info: default_data = data
      allData = { ...allData, getCS: info }
    }

    await delay(1000)
  }
  console.log(allData)

  return allData
}

export default fetchWithDelay
