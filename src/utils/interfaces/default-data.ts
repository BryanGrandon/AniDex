import type { anime_wiki } from './wiki/anime-wiki'

interface default_data {
  pagination: {
    last_visible_page: number
    has_next_page: boolean
    current_page: number
    items: {
      count: number
      total: number
      per_page: number
    }
  }
  data: anime_wiki[]
}

export type { default_data }
