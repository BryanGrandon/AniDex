import { atom } from 'nanostores'
import type { details_and_production, main_content, poster_content, wiki_anime_trailer, wiki_streaming } from '../interfaces/wiki/logic'
import type { recommendation_entry } from '../interfaces/wiki/recommendation-wiki'

export const posterContent = atom<poster_content>({
  image: {
    type: '',
    url: '',
    status: '',
  },
  stats: [
    {
      label: '',
      value: [''],
    },
  ],
})

export const wikiMainContent = atom<main_content>({
  allTitles: {
    title: '',
    alternativeTitles: [],
  },
  details: [],
  story: [],
  relations: [
    {
      relation: '',
      entry: [
        {
          mal_id: 0,
          type: '',
          name: '',
          url: '',
        },
      ],
    },
  ],
})

export const wikiAnimeTrailer = atom<wiki_anime_trailer>({
  title: '',
  youtube_id: '',
})

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

export const recommendations = atom<recommendation_entry[]>([
  {
    entry: {
      mal_id: 0,
      url: '',
      images: {
        jpg: {
          image_url: '',
          small_image_url: '',
          large_image_url: '',
        },
        webp: {
          image_url: '',
          small_image_url: '',
          large_image_url: '',
        },
      },
      title: '',
    },
  },
])
