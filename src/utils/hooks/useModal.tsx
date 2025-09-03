import { useEffect, useState } from 'preact/hooks'
import fetchWithDelay from '../../services/api/fetchWithDelay'
import { idModal, isOpenModal, typeModal } from '../storage/data-modal'
import type { data_modal_anime, data_modal_manga, data_recommendation } from '../interfaces/modal'

type use_modal = {
  id?: number
  type?: string
}

const useModal = ({ id, type }: use_modal) => {
  const [json, setJson] = useState<any>()
  const [recommendationsData, setRecommendationsData] = useState<data_recommendation>()

  const urlFullData = `https://api.jikan.moe/v4/${type}/${id}/full`
  const urlRecommendations = `https://api.jikan.moe/v4/${type}/${id}/recommendations`

  const getData = (url: string, json: any) => {
    if (url == urlFullData) setJson(json.data)
    else if (url == urlRecommendations) setRecommendationsData(json)
  }
  useEffect(() => {
    fetchWithDelay({ getData, urls: [urlFullData, urlRecommendations] })
  }, [])

  const recommendations = recommendationsData?.data.slice(0, 6) ? recommendationsData?.data.slice(0, 6) : []

  const [data, setData] = useState<any>()

  if (type == 'anime') {
    const info: data_modal_anime = json
    setData({
      title: info?.title,
      image: info?.images.webp.large_image_url,
      synopsis: info?.synopsis,
      youtube_id: info?.trailer.youtube_id,
      background: info?.background,
      primaryList: {
        ['alternative titles']: info?.titles ? info?.titles.map((item) => ' ' + item.title).slice(0, 3) : [],
        type: info?.type ? info?.type : '',
        episode: info?.episodes ? info?.episodes : 0,
        duration: info?.duration ? info?.duration : '',
        status: info?.status ? info?.status : '',
        year: info?.year ? info?.year : 'TBA',
        ['Explicit Genres']: info?.explicit_genres ? info?.explicit_genres : '',
        genres: info?.genres ? info?.genres.map((item) => ' ' + item.name) : [],
        themes: info?.themes ? info?.themes.map((item) => ' ' + item.name) : [],
      },
      secondaryList: {
        studios: info?.studios ? info?.studios.map((item) => ' ' + item.name) : [],
        score: info?.score ? '#' + info?.score : 0,
        ranked: info?.rank ? '#' + info?.rank : 0,
        popularity: info?.popularity ? '#' + info?.popularity : 0,
      },
      relations: info?.relations ? info?.relations : [],
    })
  } else if (type == 'manga') {
    const info: data_modal_manga = json
    setData({
      title: info?.title,
      image: info?.images.webp.large_image_url,
      synopsis: info?.synopsis,
      background: info?.background,
      primaryList: {
        ['alternative titles']: info?.titles ? info?.titles.map((el) => ' ' + el.title) : [],
        type: info?.type ? info?.type : '',
        status: info?.status ? info?.status : '',
        chapters: info?.chapters ? info?.chapters : 'Unknown',
        genres: info?.genres ? info.genres.map((el) => ' ' + el.name) : [],
        themes: info?.themes ? info?.themes.map((el) => ' ' + el.name) : [],
        ['Explicit Genres']: info?.explicit_genres ? info?.explicit_genres : '',
        volumes: info?.volumes ? info?.volumes : '',
      },
      secondaryList: {
        authors: info?.authors.map((e) => ' ' + e.name),
        score: info?.score ? '#' + info?.score : '',
        ranked: info?.rank ? '#' + info?.rank : '',
        popularity: info?.popularity ? '#' + info?.popularity : '',
      },
      relations: info?.relations ? info?.relations : [],
    })
  }
  //   Handle Modal Interaction
  const selectElement = () => {
    const $home = document.querySelector('.home')
    const $modal = document.querySelector('.modal')
    return { $home, $modal }
  }

  const handlerClick = {
    open: ({ id, type }: { id: number; type: string }) => {
      const { $home, $modal } = selectElement()
      $home?.classList.add('home-hidden')
      $modal?.classList.remove('home-hidden')
      idModal.set(id)
      typeModal.set(type)
      isOpenModal.set(true)
    },
    close: () => {
      const { $home, $modal } = selectElement()
      $home?.classList.remove('home-hidden')
      $modal?.classList.add('home-hidden')
      isOpenModal.set(false)
    },
  }

  return { data, recommendations, handlerClick }
}

export default useModal
