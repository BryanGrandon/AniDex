interface mpm_data {
  mal_id: number
  url: string
  images: {
    jpg: {
      image_url: string
      small_image_url: string
      large_image_url: string
    }
    webp: {
      image_url: string
      small_image_url: string
      large_image_url: string
    }
  }
  approved: boolean
  titles: [
    {
      type: string
      title: string
    }[]
  ]
  title: string
  title_english: string
  title_japanese: string
  title_synonyms: string[]
  type: string
  chapters: null
  volumes: null
  status: string
  publishing: boolean
  published: {
    from: string
    to: null
    prop: {
      from: {
        day: number
        month: number
        year: number
      }
      to: {
        day: null
        month: null
        year: null
      }
    }
    string: string
  }
  score: number
  scored: number
  scored_by: number
  rank: number
  popularity: number
  members: number
  favorites: number
  synopsis: string
  background: string
  authors: [
    {
      mal_id: number
      type: string
      name: string
      url: string
    }[]
  ]
  serializations: [
    {
      mal_id: number
      type: string
      name: string
      url: string
    }
  ]
  genres: [
    {
      mal_id: number
      type: string
      name: string
      url: string
    }[]
  ]
  explicit_genres: []
  themes: [
    {
      mal_id: number
      type: string
      name: string
      url: string
    }[]
  ]
  demographics: [
    {
      mal_id: number
      type: string
      name: string
      url: string
    }[]
  ]
}

interface most_popular_manga {
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
  data: mpm_data[]
}

export type { most_popular_manga }
