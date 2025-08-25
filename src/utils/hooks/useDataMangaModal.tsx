import type { data_modal_manga } from '../interfaces/data-modal-manga'

const useDataMangaModal = (info: any) => {
  const data: data_modal_manga = info
  const title = data?.title
  const image = data?.images.webp.large_image_url
  const synopsis = data?.synopsis
  const background = data?.background

  const primaryList = {
    ['alternative titles']: data?.titles ? data?.titles.map((el) => ' ' + el.title) : [],
    type: data?.type ? data?.type : '',
    status: data?.status ? data?.status : '',
    chapters: data?.chapters ? data?.chapters : 'Unknown',
    genres: data?.genres ? data.genres.map((el) => ' ' + el.name) : [],
    themes: data?.themes ? data.themes.map((el) => ' ' + el.name) : [],
    ['Explicit Genres']: data?.explicit_genres ? data?.explicit_genres : '',
    volumes: data?.volumes ? data?.volumes : '',
  }
  const secondaryList = {
    authors: data?.authors.map((e) => ' ' + e.name),
    score: data?.score ? '#' + data?.score : '',
    ranked: data?.rank ? '#' + data?.rank : '',
    popularity: data?.popularity ? '#' + data?.popularity : '',
  }
  const relations = data?.relations ? data?.relations : []

  return { title, image, synopsis, background, primaryList, secondaryList, relations }
}

export default useDataMangaModal
