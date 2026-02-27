import type { details_and_production, wiki_content_card, wiki_streaming, wiki_titles } from '../../utils/interfaces/wiki/logic'
import { contentDetails, productionStats, streaming, wikiContentCard, wikiTitles } from '../../utils/storage/storage-wiki'

// GENERAL

export const setWikiContent = ({ type, image, status }: wiki_content_card) => {
  const wikiDataCard = { type, image, status }
  wikiContentCard.set(wikiDataCard)
}

export const setWikiTitles = ({ title, alternativeTitles }: wiki_titles) => {
  const allTitles = { title, alternativeTitles }
  wikiTitles.set(allTitles)
}

export const setContentDetails = (details: details_and_production[]) => {
  contentDetails.set(details)
}

export const setProductionStats = (stats: details_and_production[]) => {
  productionStats.set(stats)
}

// ANIME

export const setStreaming = (stream: { name: string; url: string }[]) => {
  const streamData = {
    label: 'Streaming',
    items: stream,
  }
  streaming.set(streamData)
}
