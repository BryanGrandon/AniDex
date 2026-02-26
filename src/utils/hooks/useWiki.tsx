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

  type set_wiki_content = {
    type: string
    image: string
    status: string
  }

  const setWikiContent = ({ type, image, status }: set_wiki_content) => {
    const wikiDataCard = { type, image, status }
    wikiContentCard.set(wikiDataCard)
  }

  type set_wiki_titles = {
    title: string
    alternativeTitles: string[]
  }

  const setWikiTitles = ({ title, alternativeTitles }: set_wiki_titles) => {
    const allTitles = { title, alternativeTitles }
    wikiTitles.set(allTitles)
  }

  const getContentWiki = async () => {
    const { ID, TYPE } = getIDAndType()

    const URL_FULL_DATA = `https://api.jikan.moe/v4/${TYPE}/${ID}/full`
    const URL_RECOMMENDATIONS = `https://api.jikan.moe/v4/${TYPE}/${ID}/recommendations`

    switch (TYPE) {
      case 'anime':
        const animeWiki = await getContentAnimeWiki(URL_FULL_DATA)

        setWikiContent({ type: TYPE, image: animeWiki.image, status: animeWiki.status })
        setWikiTitles({ title: animeWiki.title, alternativeTitles: animeWiki.alternative_titles })

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
          streaming: animeWiki.productionStats.streaming,
        }
        animeProductionStats.set(wikiDataProductionStats)

        break

      case 'manga':
        const mangaWiki = await getContentMangaWiki(URL_FULL_DATA)
        setWikiContent({ type: TYPE, image: mangaWiki.image, status: mangaWiki.status })
        setWikiTitles({ title: mangaWiki.title, alternativeTitles: mangaWiki.alternative_titles })
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
