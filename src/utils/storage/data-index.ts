import {
  URL_CURRENT_SEASON,
  URL_LATEST_EPISODES_UPDATES,
  URL_MOST_POPULAR_ANIME,
  URL_MOST_POPULAR_MANGA,
  URL_PUBLISHING_MANGA,
  URL_PUBLISHING_NOVEL,
  URL_TOP_AIRING_ANIME,
  URL_TOP_UPCOMING_ANIME,
} from '../../utils/constants/urls-api'
import getDataApi from '../../services/api/getDataApi'

const urls = [URL_MOST_POPULAR_ANIME, URL_MOST_POPULAR_MANGA, URL_TOP_AIRING_ANIME, URL_CURRENT_SEASON, URL_LATEST_EPISODES_UPDATES, URL_TOP_UPCOMING_ANIME, URL_PUBLISHING_MANGA, URL_PUBLISHING_NOVEL]
const allData = await getDataApi(urls)

export const dataCS = allData?.getCS ? allData.getCS : [] // Current Season

// Main
export const dataLEU = allData?.getLEU ? allData.getLEU : [] // Latest Episodes Updates
export const dataTUA = allData?.getTUA ? allData.getTUA : [] // Top Upcoming Anime
export const dataPM = allData?.getPM ? allData.getPM : [] // Publishing Manga
export const dataPN = allData?.getPN ? allData.getPN : [] // Publishing Novel

// aside
export const dataMPA = allData?.getMPA ? allData.getMPA : [] // Most Popular Anime
export const dataMPM = allData?.getMPM ? allData.getMPM : [] // Most Popular Manga
export const dataTAA = allData?.getTAA ? allData.getTAA : [] // Top Airing Anime
