import { atom } from 'nanostores'
import { URL_CURRENT_SEASON, URL_LATEST_EPISODES_UPDATES, URL_MOST_POPULAR_ANIME, URL_MOST_POPULAR_MANGA, URL_TOP_AIRING_ANIME, URL_TOP_UPCOMING_ANIME } from '../../utils/constants/urls-api'
import fetchWithDelay from '../../services/api/getDataApi'

const allData = await fetchWithDelay([URL_MOST_POPULAR_ANIME, URL_MOST_POPULAR_MANGA, URL_TOP_AIRING_ANIME, URL_CURRENT_SEASON, URL_LATEST_EPISODES_UPDATES, URL_TOP_UPCOMING_ANIME])

export const dataCS = allData?.getCS ? allData.getCS : []

// Main
export const dataLEU = atom(allData?.getLEU ? allData.getLEU : [])
export const dataTUA = atom(allData?.getTUA ? allData.getTUA : [])

// aside
export const dataMPA = atom(allData?.getMPA ? allData.getMPA : [])
export const dataMPM = atom(allData?.getMPM ? allData.getMPM : [])
export const dataTAA = atom(allData?.getTAA ? allData.getTAA : [])
