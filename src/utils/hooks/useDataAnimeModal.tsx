import type { data_modal_anime } from '../interfaces/data-modal-anime'

const useDataAnimeModal = (info: any) => {
  const data: data_modal_anime = info

  const title = data?.title
  const youtube_id = data?.trailer.youtube_id
  const image = data?.images.webp.large_image_url
  const synopsis = data?.synopsis

  const primaryList = {
    ['alternative title']: data?.titles ? data?.titles.map((item) => ' ' + item.title).slice(0, 3) : [],
    type: data?.type ? data?.type : '',
    episode: data?.episodes ? data?.episodes : 0,
    duration: data?.duration ? data?.duration : '',
    status: data?.status ? data?.status : '',
    year: data?.year ? data?.year : 'TBA',
    genre: data?.genres ? data?.genres.map((item) => ' ' + item.name) : [],
    themes: data?.themes ? data?.themes.map((item) => ' ' + item.name) : [],
  }

  const secondaryList = {
    studios: data?.studios ? data?.studios.map((item) => ' ' + item.name) : [],
    score: data?.score ? '#' + data?.score : 0,
    ranked: data?.rank ? '#' + data?.rank : 0,
    popularity: data?.popularity ? '#' + data?.popularity : 0,
  }

  const relations = data?.relations ? data?.relations : []

  return { title, youtube_id, image, synopsis, primaryList, secondaryList, relations }
}

export default useDataAnimeModal
