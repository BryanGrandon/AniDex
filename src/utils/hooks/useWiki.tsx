import { getIndividualInfo } from '../../services/api/getIndividualInfo'
import { getContentAnimeWiki, getContentMangaWiki } from '../../services/content/getContentWiki'
import type { recommendation_wiki } from '../interfaces/wiki/recommendation-wiki'
import { WIKI } from '../constants/location'
import { wikiAnimeTrailer } from '../storage/storage-wiki'
import { setMainContent, setPosterContent, setProductionStats, setRecommendations, setStreaming } from '../../services/content/setContentWiki'

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
    const URL_RECOMMENDATIONS = `https://api.jikan.moe/v4/${TYPE}/${ID}/recommendations`

    switch (TYPE) {
      case 'anime':
        const animeWiki = await getContentAnimeWiki(URL_FULL_DATA)
        const recommendationAll: recommendation_wiki = await getIndividualInfo({ url: URL_RECOMMENDATIONS })
        setRecommendations(recommendationAll ? recommendationAll.data.slice(0, 6) : [])

        setPosterContent({
          image: { type: TYPE, url: animeWiki.image, status: animeWiki.status },
          stats: [
            { label: 'Genres', value: animeWiki.contentDetails.genres },
            { label: 'Explicit Genres', value: animeWiki.contentDetails.explicit_genres },
            { label: 'Themes', value: animeWiki.contentDetails.themes },
          ],
        })

        setMainContent({
          allTitles: { title: animeWiki.title, alternativeTitles: animeWiki.alternative_titles },
          details: [
            { label: 'Type', value: animeWiki.contentDetails.type },
            { label: 'Episodes', value: animeWiki.contentDetails.episode },
            { label: 'Duration', value: animeWiki.contentDetails.duration },
            { label: 'Year', value: animeWiki.contentDetails.year },
          ],
          story: [
            { label: 'Synopsis', value: animeWiki.synopsis },
            { label: 'Background', value: animeWiki.background },
          ],
          relations: animeWiki.relations,
        })
        setProductionStats([
          { label: 'Studios', value: animeWiki.productionStats.studios, forList: true },
          { label: 'Score', value: animeWiki.productionStats.score },
          { label: 'Ranked', value: animeWiki.productionStats.ranked },
          { label: 'Popularity', value: animeWiki.productionStats.popularity },
        ])

        const animeTrailer = { title: animeWiki.title, youtube_id: animeWiki.youtube_id }
        wikiAnimeTrailer.set(animeTrailer)
        setStreaming(animeWiki.productionStats.streaming)

        break

      case 'manga':
        const mangaWiki = await getContentMangaWiki(URL_FULL_DATA)
        const recommendationManga: recommendation_wiki = await getIndividualInfo({ url: URL_RECOMMENDATIONS })
        setRecommendations(recommendationManga ? recommendationManga.data.slice(0, 6) : [])

        setPosterContent({
          image: { type: TYPE, url: mangaWiki.image, status: mangaWiki.status },
          stats: [
            { label: 'Genres', value: mangaWiki.contentDetails.genres },
            { label: 'Explicit Genres', value: mangaWiki.contentDetails.explicit_genres },
            { label: 'Themes', value: mangaWiki.contentDetails.themes },
          ],
        })
        setMainContent({
          allTitles: { title: mangaWiki.title, alternativeTitles: mangaWiki.alternative_titles },
          details: [
            { label: 'Type', value: mangaWiki.contentDetails.type },
            { label: 'Chapters', value: mangaWiki.contentDetails.chapters },
            { label: 'Volumes', value: mangaWiki.contentDetails.volumes },
          ],
          story: [
            { label: 'Synopsis', value: mangaWiki.synopsis },
            { label: 'Background', value: mangaWiki.background },
          ],
          relations: mangaWiki.relations,
        })

        setProductionStats([
          { label: 'Authors', value: mangaWiki.productionStats.authors, forList: true },
          { label: 'Score', value: mangaWiki.productionStats.score },
          { label: 'Ranked', value: mangaWiki.productionStats.ranked },
          { label: 'Popularity', value: mangaWiki.productionStats.popularity },
        ])

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
