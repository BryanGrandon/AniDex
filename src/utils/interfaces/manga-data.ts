import type { in_all } from './general'

type manga_data = in_all & {
  chapters: number
  volumes: number
  publishing: true
  published: {
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
  authors: {
    mal_id: number
    type: string
    name: string
    url: string
  }[]
  serializations: {
    mal_id: number
    type: string
    name: string
    url: string
  }[]
}

type specific_info_about_manga = {
  title: string
  image: string
  synopsis: string
  background: string
  primaryList: {
    ['alternative titles']: string[]
    type: string
    ['Explicit Genres']: string | { mal_id: number; type: string; name: string; url: string }[]
    chapters: string | number
    status: string
    genres: string[]
    volumes: string | number
    themes: string[]
  }
  secondaryList: {
    authors: string[]
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

export type { manga_data, specific_info_about_manga }
