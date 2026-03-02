import { atom } from 'nanostores'
import type { details_and_production, story_details, wiki_anime_trailer, wiki_content_card, wiki_streaming, wiki_titles } from '../interfaces/wiki/logic'

export const wikiContentCard = atom<wiki_content_card>({
  type: '',
  image: '',
  status: '',
})

export const wikiTitles = atom<wiki_titles>({
  title: '',
  alternativeTitles: [],
})

export const wikiAnimeTrailer = atom<wiki_anime_trailer>({
  title: '',
  youtube_id: '',
})

export const contentDetails = atom<details_and_production[]>([
  {
    label: '',
    value: '',
  },
])

export const productionStats = atom<details_and_production[]>([
  {
    label: '',
    value: '',
  },
])

export const streaming = atom<wiki_streaming>({
  label: '',
  items: [
    {
      name: '',
      url: '',
    },
  ],
})

export const storyDetails = atom<story_details[]>([
  {
    label: '',
    value: '',
  },
])
