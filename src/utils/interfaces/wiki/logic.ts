// GENERAL

type list = {
  label: string
  value: string | number | string[]
  forList?: boolean
}

type poster_content = {
  image: {
    type: string
    url: string
    status: string
  }
  stats: list[]
}

type main_content = {
  allTitles: {
    title: string
    alternativeTitles: string[]
  }
  details: list[]
  story: {
    label: string
    value: string
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
}
export type { poster_content, main_content }

type details_and_production = {
  label: string
  value: string | number | string[]
  forList?: boolean
}

export type { details_and_production }

// ANIME

type wiki_anime_trailer = {
  title: string
  youtube_id: string
}

type wiki_streaming = {
  label: string
  items: {
    name: string
    url: string
  }[]
}

export type { wiki_anime_trailer, wiki_streaming }
