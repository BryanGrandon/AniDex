import { getIndividualInfo } from '../../services/api/getIndividualInfo'
import { getContentAnimeWiki, getContentMangaWiki } from '../../services/content/getContentWiki'
import type { recommendation_wiki } from '../interfaces/wiki/recommendation-wiki'
import { WIKI } from '../constants/location'
import { wikiContentCard, wikiTitles, wikiAnimeTrailer, animeContentDetails, animeProductionStats } from '../storage/storage-wiki'

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
        const animeWiki = await getContentAnimeWiki(URL_FULL_DATA)

        const wikiDataCard = {
          type: TYPE,
          image: animeWiki.image,
          status: animeWiki?.status,
        }
        wikiContentCard.set(wikiDataCard)

        const allTitles = {
          title: animeWiki.title,
          alternativeTitles: animeWiki.alternative_titles,
        }
        wikiTitles.set(allTitles)

        const animeTrailer = {
          title: animeWiki.title,
          youtube_id: animeWiki.youtube_id,
        }
        wikiAnimeTrailer.set(animeTrailer)

        const wikiDataDetails = {
          type: animeWiki.contentDetails.type,
          episode: animeWiki.contentDetails.episode,
          duration: animeWiki.contentDetails.duration,
          year: animeWiki.contentDetails.year,
          genres: animeWiki.contentDetails.genres,
          explicit_genres: animeWiki.contentDetails.explicit_genres,
          themes: animeWiki.contentDetails.themes,
          streaming: animeWiki.productionStats.streaming,
        }
        animeContentDetails.set(wikiDataDetails)

        const wikiDataProductionStats = {
          studios: animeWiki.productionStats.studios,
          score: animeWiki.productionStats.score,
          ranked: animeWiki.productionStats.ranked,
          popularity: animeWiki.productionStats.popularity,
        }
        animeProductionStats.set(wikiDataProductionStats)

        break

      case 'manga':
        const mangaWiki = await getContentMangaWiki(URL_FULL_DATA)

        break
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
    await getContentWiki()
    await getRecommendationWiki()
  }

  return { getDataWiki, handleMediaSelect, getIDAndType }
}

export default useWiki
