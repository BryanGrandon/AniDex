interface inAll {
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
  approved: true
  titles: [
    {
      type: string
      title: string
    }
  ]
  title: string
  title_english: string
  title_japanese: string
  title_synonyms: string[]
  type: string
  status: string
  score: number
  scored_by: number
  rank: number
  popularity: number
  members: number
  favorites: number
  synopsis: string
  background: string
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

  relations: {
    relation: string
    entry: {
      mal_id: number
      type: string
      name: string
      url: string
    }[]
  }[]
  external: {
    name: string
    url: string
  }[]
}

interface data_modal_anime extends inAll {
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

interface data_modal_manga extends inAll {
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

interface data_recommendation {
  data: {
    entry: {
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
      title: string
    }
  }[]
}

type data = {
  title: string
  image: string
  synopsis: string
  youtube_id?: string
  background?: string
  primaryList: {
    ['alternative titles']: string[]
    type: string
    episode?: number
    duration?: string
    ['Explicit Genres']: string | { mal_id: number; type: string; name: string; url: string }[]
    chapters?: string | number
    status: string
    year?: string | number
    genres: string[]
    volumes?: string | number
    themes?: string[]
  }
  secondaryList: {
    studios?: string[]
    authors?: string[]
    score?: number | string
    ranked?: number | string
    popularity?: number | string
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

export type { data_modal_anime, data_modal_manga, data_recommendation, data }
