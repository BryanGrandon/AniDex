interface array_data {
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
  trailer: {
    youtube_id: string
    url: string
    embed_url: string
    images: {
      image_url: string
      small_image_url: string
      medium_image_url: string
      large_image_url: string
      maximum_image_url: string
    }
  }
  approved: boolean
  titles: {
    type: string
    title: string
  }[]
  title: string
  title_english: string
  title_japanese: string
  title_synonyms: string[]
  type: string
  source: string
  episodes: number
  status: string
  airing: boolean
  aired: {
    from: string
    to: string | null
    prop: {
      from: { year: number; month: number; day: number }
      to: { year: number; month: number; day: number } | null
    }
    string: string
  }
  duration: string
  rating: string
  score: number
  scored_by: number
  rank: number
  popularity: number
  members: number
  favorites: number
  synopsis: string
  background: string | null
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
  genres: {
    mal_id: number
    type: string
    name: string
    url: string
  }[]
  explicit_genres: {
    mal_id: number
    type: string
    name: string
    url: string
  }[]
  themes: {
    mal_id: number
    type: string
    name: string
    url: string
  }[]
  demographics: {
    mal_id: number
    type: string
    name: string
    url: string
  }[]
}

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
