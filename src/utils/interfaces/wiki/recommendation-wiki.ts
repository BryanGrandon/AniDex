interface recommendation_wiki {
  data: recommendation_entry[]
}

interface recommendation_entry {
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
}

export type { recommendation_wiki, recommendation_entry }
