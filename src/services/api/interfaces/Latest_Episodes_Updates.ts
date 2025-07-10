interface LEU_Data {
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
  episodes: [
    {
      mal_id: number
      url: string
      title: string
      premium: boolean
    },
    {
      mal_id: number
      url: string
      title: string
      premium: true
    }
  ]
  region_locked: boolean
}

interface LEU {
  pagination: {
    last_visible_page: 1
    has_next_page: false
  }
  data: LEU_Data[]
}

export type { LEU }
