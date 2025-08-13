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

export type { data_recommendation }
