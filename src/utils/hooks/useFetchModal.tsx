import { useStore } from '@nanostores/preact'
import { typeModal } from '../storage/data-modal'
import { useEffect, useState } from 'preact/hooks'
import fetchWithDelay from '../../services/api/fetchWithDelay'
import type { data_recommendation } from '../interfaces/data-recommendation'

const useFetchModal = (id: number) => {
  const type = useStore(typeModal)

  const [data, setData] = useState<any>()
  const [recommendationsData, setRecommendationsData] = useState<data_recommendation>()

  const urlFullData = `https://api.jikan.moe/v4/${type}/${id}/full`
  const urlRecommendations = `https://api.jikan.moe/v4/${type}/${id}/recommendations`

  const getData = (url: string, json: any) => {
    if (url == urlFullData) setData(json.data)
    else if (url == urlRecommendations) setRecommendationsData(json)
  }
  useEffect(() => {
    fetchWithDelay({ getData, urls: [urlFullData, urlRecommendations] })
  }, [])
  const recommendations = recommendationsData?.data.slice(0, 6) ? recommendationsData?.data.slice(0, 6) : []

  return { data, recommendations }
}

export default useFetchModal
