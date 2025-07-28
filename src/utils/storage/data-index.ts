import { atom } from 'nanostores'
import {
  URL_CURRENT_SEASON,
  URL_LATEST_EPISODES_UPDATES,
  URL_MOST_POPULAR_ANIME,
  URL_MOST_POPULAR_MANGA,
  URL_PUBLISHING_MANGA,
  URL_TOP_AIRING_ANIME,
  URL_TOP_UPCOMING_ANIME,
} from '../../utils/constants/urls-api'
import fetchWithDelay from '../../services/api/getDataApi'

const urls = [URL_MOST_POPULAR_ANIME, URL_MOST_POPULAR_MANGA, URL_TOP_AIRING_ANIME, URL_CURRENT_SEASON, URL_LATEST_EPISODES_UPDATES, URL_TOP_UPCOMING_ANIME, URL_PUBLISHING_MANGA]
const allData = await fetchWithDelay(urls)

export const dataCS = allData?.getCS ? allData.getCS : [] // Current Season

// Main
export const dataLEU = allData?.getLEU ? allData.getLEU : [] // Latest Episodes Updates
export const dataTUA = allData?.getTUA ? allData.getTUA : [] // Top Upcoming Anime
export const dataPM = allData?.getPM ? allData.getPM : [] // Publishing Manga

// aside
export const dataMPA = atom(allData?.getMPA ? allData.getMPA : []) // Most Popular Anime
export const dataMPM = atom(allData?.getMPM ? allData.getMPM : []) // Most Popular Manga
export const dataTAA = atom(allData?.getTAA ? allData.getTAA : []) // Top Airing Anime
