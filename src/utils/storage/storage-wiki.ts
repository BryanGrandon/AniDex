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

type anime_content_details = {
  type: string
  episode?: number | string
  duration?: string
  year?: number | string
  genres?: string[]
  explicit_genres?: string[]
  themes?: string[]
}

export const animeContentDetails = atom<anime_content_details>({
  type: '',
  episode: 0,
  duration: '',
  year: '',
  genres: [],
  explicit_genres: [],
  themes: [],
})

type anime_productions_stats = {
  studios: string[]
  score: number | string
  ranked: number | string
  popularity: number | string
}

export const animeProductionStats = atom<anime_productions_stats>({
  studios: [],
  score: '',
  ranked: '',
  popularity: '',
})
