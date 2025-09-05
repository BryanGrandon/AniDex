import type { anime_data } from '../interfaces/anime-data'
import type { manga_data } from '../interfaces/manga-data'
import type { recommendation_data } from '../interfaces/recommendation-data'

type Props = {
  type: string
  id: number
}

const individualInfo = async ({ url }: { url: string }) => {
  const res = await fetch(url)
  let json = await res.json()
  return json
}

const getInfo = async ({ id, type }: Props) => {
  const urlFullData = `https://api.jikan.moe/v4/${type}/${id}/full`
  const urlRecommendations = `https://api.jikan.moe/v4/${type}/${id}/recommendations`

  const json = await individualInfo({ url: urlFullData })
  const recommendationsJson: recommendation_data = await individualInfo({ url: urlRecommendations })
  const recommendations = recommendationsJson

  let data = {}

  return { json, recommendations }
}

export { getInfo }
