import { atom } from 'nanostores'

type wiki_content_card = {
  type: string
  image: string
  status: string
}

export const wikiContentCard = atom<wiki_content_card>({
  type: '',
  image: '',
  status: '',
})

type wiki_titles = {
  title: string
  alternativeTitles: string[]
}

export const wikiTitles = atom<wiki_titles>({
  title: '',
  alternativeTitles: [],
})

type wiki_anime_trailer = {
  title: string
  youtube_id: string
}

export const wikiAnimeTrailer = atom<wiki_anime_trailer>({
  title: '',
  youtube_id: '',
})

type content_details = {
  label: string
  value: string | number | string[]
  forList?: boolean
}

export const contentDetails = atom<content_details[]>([
  {
    label: '',
    value: '',
  },
])

type anime_productions_stats = {
  studios: string[]
  score: number | string
  ranked: number | string
  popularity: number | string
  streaming: {
    name: string
    url: string
  }[]
}

export const animeProductionStats = atom<anime_productions_stats>({
  studios: [],
  score: '',
  ranked: '',
  popularity: '',
  streaming: [
    {
      name: '',
      url: '',
    },
  ],
})
