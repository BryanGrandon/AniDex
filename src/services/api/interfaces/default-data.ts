import type { array_data } from './array-data'

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
  data: array_data[]
}

export type { default_data }
