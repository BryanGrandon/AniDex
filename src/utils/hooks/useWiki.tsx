import { getIndividualInfo } from '../../services/api/getIndividualInfo'
import { getContentAnimeWiki, getContentMangaWiki } from '../../services/content/getContentWiki'
import type { recommendation_wiki } from '../interfaces/wiki/recommendation-wiki'
import type { specific_wiki_about_manga } from '../interfaces/wiki/manga-wiki'
import type { specific_wiki_about_anime } from '../interfaces/wiki/anime-wiki'
import { WIKI } from '../constants/location'

const useWiki = () => {
  type handle_media_select = {
    id: number
    type: string
  }

  const getIDAndType = () => {
    const ID = localStorage.getItem('id')
    const TYPE = localStorage.getItem('type')
    return { ID, TYPE }
  }

  const handleMediaSelect = ({ id, type }: handle_media_select) => {
    localStorage.setItem('id', String(id))
    localStorage.setItem('type', String(type))
    window.location.href = WIKI
  }

  const getContentWiki = async () => {
    const { ID, TYPE } = getIDAndType()

    const URL_FULL_DATA = `https://api.jikan.moe/v4/${TYPE}/${ID}/full`

    switch (TYPE) {
      case 'anime':
        const animeWiki: specific_wiki_about_anime = await getContentAnimeWiki(URL_FULL_DATA)
        return animeWiki
      case 'manga':
        const mangaWiki: specific_wiki_about_manga = await getContentMangaWiki(URL_FULL_DATA)
        return mangaWiki
    }
  }

  const getRecommendationWiki = async () => {
    const { ID, TYPE } = getIDAndType()
    const URL_RECOMMENDATIONS = `https://api.jikan.moe/v4/${TYPE}/${ID}/recommendations`
    const recommendationAll = await getIndividualInfo({ url: URL_RECOMMENDATIONS })
    const recommendation: recommendation_wiki = recommendationAll ? recommendationAll.data.slice(0, 6) : []
    return recommendation
  }

  const getDataWiki = async () => {
    const data = await getContentWiki()
    const recommendation = await getRecommendationWiki()
    return { data, recommendation }
  }

  return { getDataWiki, handleMediaSelect, getIDAndType }
}

export default useWiki
