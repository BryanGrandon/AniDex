import type { anime_data } from './anime-data'

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
  data: anime_data[]
}

export type { default_data }
