interface recommendation_data {
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

export type { recommendation_data }
