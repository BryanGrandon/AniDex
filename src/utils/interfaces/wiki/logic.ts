// GENERAL

type details_and_production = {
  label: string
  value: string | number | string[]
  forList?: boolean
}

type wiki_titles = {
  title: string
  alternativeTitles: string[]
}

type wiki_content_card = {
  type: string
  image: string
  status: string
}

type story_details = {
  label: string
  value: string
}

export type { details_and_production, wiki_titles, wiki_content_card, story_details }

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
