import { atom } from 'nanostores'
import { URL_CURRENT_SEASON, URL_MOST_POPULAR_ANIME, URL_MOST_POPULAR_MANGA, URL_TOP_AIRING_ANIME } from '../../utils/constants/urls-api'
import fetchWithDelay from '../../services/api/getDataApi'

const allData = await fetchWithDelay([URL_MOST_POPULAR_ANIME, URL_MOST_POPULAR_MANGA, URL_TOP_AIRING_ANIME, URL_CURRENT_SEASON])

// Main
export const dataCS = atom(allData?.getCS ? allData.getCS : [])

// aside
export const dataMPA = atom(allData?.getMPA ? allData.getMPA : [])
export const dataMPM = atom(allData?.getMPM ? allData.getMPM : [])
export const dataTAA = atom(allData?.getTAA ? allData.getTAA : [])
