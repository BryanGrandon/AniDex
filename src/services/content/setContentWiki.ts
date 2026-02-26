import { contentDetails, wikiContentCard, wikiTitles } from '../../utils/storage/storage-wiki'

type set_wiki_content = {
  type: string
  image: string
  status: string
}

export const setWikiContent = ({ type, image, status }: set_wiki_content) => {
  const wikiDataCard = { type, image, status }
  wikiContentCard.set(wikiDataCard)
}

type set_wiki_titles = {
  title: string
  alternativeTitles: string[]
}

export const setWikiTitles = ({ title, alternativeTitles }: set_wiki_titles) => {
  const allTitles = { title, alternativeTitles }
  wikiTitles.set(allTitles)
}

type set_content_details = {
  label: string
  value: string | number | string[]
  forList?: boolean
}

export const setContentDetails = (details: set_content_details[]) => {
  contentDetails.set(details)
}
