import { URL_CURRENT_SEASON, URL_LATEST_EPISODES_UPDATES, URL_MOST_POPULAR_ANIME, URL_MOST_POPULAR_MANGA, URL_TOP_AIRING_ANIME, URL_TOP_UPCOMING_ANIME } from '../../utils/constants/urls-api'

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms))

const removeDuplicate = (array: string[]) => {
  let newArray: any[] = []
  array.map((element) => newArray.push(JSON.parse(element)))
  return newArray
}

const fetchWithDelay = async (urls: string[]) => {
  let allData: any = {}

  for (const url of urls) {
    const res = await fetch(url)
    let data = await res.json()
    let newArrayData = removeDuplicate([...new Set<string>(data.data?.map(JSON.stringify))])
    data.data = newArrayData

    if (url == URL_MOST_POPULAR_ANIME) allData.getMPA = data
    else if (url == URL_MOST_POPULAR_MANGA) allData.getMPM = data
    else if (url == URL_TOP_AIRING_ANIME) allData.getTAA = data
    else if (url == URL_CURRENT_SEASON) allData.getCS = data
    else if (url == URL_LATEST_EPISODES_UPDATES) allData.getLEU = data
    else if (url == URL_TOP_UPCOMING_ANIME) allData.getTUA = data

    await delay(500)
  }
  return allData
}

export default fetchWithDelay
