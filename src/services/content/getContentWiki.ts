import { getIndividualInfo } from '../api/getIndividualInfo'
import type { anime_wiki, specific_wiki_about_anime } from '../../utils/interfaces/wiki/anime-wiki'
import type { manga_wiki, specific_wiki_about_manga } from '../../utils/interfaces/wiki/manga-wiki'

const getContentAnimeWiki = async (URL: string) => {
  const json = await getIndividualInfo({ url: URL })
  const animeWiki: anime_wiki = json.data

  const objectAnimeWiki: specific_wiki_about_anime = {
    title: animeWiki?.title,
    image: animeWiki?.images.webp.large_image_url,
    synopsis: animeWiki?.synopsis,
    youtube_id: animeWiki?.trailer.youtube_id,
    background: animeWiki?.background,
    streaming: animeWiki?.streaming,
    primaryList: {
      ['alternative titles']: animeWiki?.titles ? animeWiki?.titles.map((item) => ' ' + item.title).slice(0, 3) : [],
      type: animeWiki?.type ? animeWiki?.type : '',
      episode: animeWiki?.episodes ? animeWiki?.episodes : 0,
      duration: animeWiki?.duration ? animeWiki?.duration : '',
      status: animeWiki?.status ? animeWiki?.status : '',
      year: animeWiki?.year ? animeWiki?.year : 'TBA',
      ['Explicit Genres']: animeWiki?.explicit_genres ? animeWiki?.explicit_genres : '',
      genres: animeWiki?.genres ? animeWiki?.genres.map((item) => ' ' + item.name) : [],
      themes: animeWiki?.themes ? animeWiki?.themes.map((item) => ' ' + item.name) : [],
    },
    secondaryList: {
      studios: animeWiki?.studios ? animeWiki?.studios.map((item) => ' ' + item.name) : [],
      score: animeWiki?.score ? '#' + animeWiki?.score : 0,
      ranked: animeWiki?.rank ? '#' + animeWiki?.rank : 0,
      popularity: animeWiki?.popularity ? '#' + animeWiki?.popularity : 0,
    },
    relations: animeWiki?.relations ? animeWiki?.relations : [],
  }
  return objectAnimeWiki
}

const getContentMangaWiki = async (URL: string) => {
  const json = await getIndividualInfo({ url: URL })
  let info: manga_wiki = json.data
  const object: specific_wiki_about_manga = {
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
  }
  return object
}

export { getContentAnimeWiki, getContentMangaWiki }
