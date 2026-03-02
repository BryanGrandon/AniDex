import type { details_and_production, story_details, wiki_content_card, wiki_titles } from '../../utils/interfaces/wiki/logic'
import { contentDetails, productionStats, storyDetails, streaming, wikiContentCard, wikiTitles } from '../../utils/storage/storage-wiki'

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

export const setStoryDetails = (story: story_details[]) => {
  storyDetails.set(story)
}

// ANIME

export const setStreaming = (stream: { name: string; url: string }[]) => {
  const streamData = {
    label: 'Streaming',
    items: stream,
  }
  streaming.set(streamData)
}
