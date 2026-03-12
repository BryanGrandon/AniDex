import type { details_and_production, main_content, poster_content } from '../../utils/interfaces/wiki/logic'
import type { recommendation_entry } from '../../utils/interfaces/wiki/recommendation-wiki'
import { posterContent, productionStats, recommendations, streaming, wikiMainContent } from '../../utils/storage/storage-wiki'

// GENERAL

export const setPosterContent = ({ image, stats }: poster_content) => {
  posterContent.set({ image, stats })
}

export const setMainContent = ({ allTitles, details, story, relations }: main_content) => {
  wikiMainContent.set({ allTitles, details, story, relations })
}

// -----

export const setProductionStats = (stats: details_and_production[]) => {
  productionStats.set(stats)
}

export const setRecommendations = (recommendation: recommendation_entry[]) => {
  recommendations.set(recommendation)
}

// ANIME

export const setStreaming = (stream: { name: string; url: string }[]) => {
  const streamData = {
    label: 'Streaming',
    items: stream,
  }
  streaming.set(streamData)
}
