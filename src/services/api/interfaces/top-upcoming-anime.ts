interface TUA_DATA {
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
    youtube_id: null
    url: null
    embed_url: null
    images: {
      image_url: null
      small_image_url: null
      medium_image_url: null
      large_image_url: null
      maximum_image_url: null
    }
  }
  approved: true
  titles: [
    {
      type: string
      title: string
    }[]
  ]
  title: string
  title_english: null
  title_japanese: string
  title_synonyms: string[]
  type: string
  source: string
  episodes: number
  status: string
  airing: boolean
  aired: {
    from: null
    to: null
    prop: {
      from: {
        day: null
        month: null
        year: null
      }
      to: {
        day: null
        month: null
        year: null
      }
    }
    string: string
  }
  duration: string
  rating: null
  score: null
  scored_by: null
  rank: null
  popularity: number
  members: number
  favorites: number
  synopsis: string
  background: string
  season: null
  year: null
  broadcast: {
    day: null
    time: null
    timezone: null
    string: null
  }
  producers: []
  licensors: []
  studios: [
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
  themes: []
  demographics: []
}

interface top_upcoming_anime {
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
  data: TUA_DATA[]
}

export type { top_upcoming_anime }
