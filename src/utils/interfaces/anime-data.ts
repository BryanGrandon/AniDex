import type { in_all } from './general'

type anime_data = in_all & {
  trailer: {
    youtube_id: string
    url: string
    embed_url: string
  }
  source: string
  episodes: number
  airing: true
  aired: {
    from: string
    to: string
    prop: {
      from: {
        day: number
        month: number
        year: number
      }
      to: {
        day: number
        month: number
        year: number
      }
      string: string
    }
  }
  duration: string
  rating: string
  season: string
  year: number
  broadcast: {
    day: string
    time: string
    timezone: string
    string: string
  }
  producers: {
    mal_id: number
    type: string
    name: string
    url: string
  }[]
  licensors: {
    mal_id: number
    type: string
    name: string
    url: string
  }[]
  studios: {
    mal_id: number
    type: string
    name: string
    url: string
  }[]
  theme: {
    openings: string[]
    endings: string[]
  }
  streaming: {
    name: string
    url: string
  }[]
}

export type { anime_data }

type specific_info_about_anime = {
  title: string
  image: string
  synopsis: string
  youtube_id: string
  background: string
  primaryList: {
    ['alternative titles']: string[]
    type: string
    episode: number
    duration: string
    ['Explicit Genres']: string | { mal_id: number; type: string; name: string; url: string }[]
    status: string
    year: string | number
    genres: string[]
    themes: string[]
  }
  secondaryList: {
    studios: string[]
    score: number | string
    ranked: number | string
    popularity: number | string
  }
  relations: {
    relation: string
    entry: {
      mal_id: number
      type: string
      name: string
      url: string
    }[]
  }[]
}

export type { specific_info_about_anime }
