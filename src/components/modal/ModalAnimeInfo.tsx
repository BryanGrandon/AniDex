import { useEffect, useState } from 'preact/hooks'
import type { data_modal_anime } from '../../utils/interfaces/data-modal-anime'
import type { data_recommendation } from '../../utils/interfaces/data-recommendation'
import LiteYouTubeEmbed from 'react-lite-youtube-embed'
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'
import MiniCard from '../ui/MiniCard'
import fetchWithDelay from '../../services/api/fetchWithDelay'
import { idModal, isOpenModal, typeModal } from '../../utils/storage/data-modal'
import ModalList from './ModalList'
import openModalOnClick from '../../utils/scripts/openModalOnClick'

type Modal_Anime = {
  id: number
  type: string
}

const ModalAnimeInfo = ({ id, type }: Modal_Anime) => {
  const [dataAnimeFull, setDataAnimeFull] = useState<data_modal_anime>()
  const [dataAnimeRecommendations, setDataAnimeRecommendations] = useState<data_recommendation>()

  const urlAnimeFull = `https://api.jikan.moe/v4/${type}/${id}/full`
  const urlAnimeRecommendations = `https://api.jikan.moe/v4/${type}/${id}/recommendations`

  const getData = (url: string, json: any) => {
    if (url == urlAnimeFull) setDataAnimeFull(json.data)
    else if (url == urlAnimeRecommendations) setDataAnimeRecommendations(json)
  }
  useEffect(() => {
    fetchWithDelay({ getData, urls: [urlAnimeFull, urlAnimeRecommendations] })
  }, [])

  const recommendations = dataAnimeRecommendations?.data.slice(0, 6) ? dataAnimeRecommendations?.data.slice(0, 6) : []
  const relations = dataAnimeFull?.relations ? dataAnimeFull?.relations : []

  const mainList = {
    ['alternative title']: dataAnimeFull?.titles ? dataAnimeFull?.titles.map((item) => ' ' + item.title).slice(0, 3) : [],
    type: dataAnimeFull?.type ? dataAnimeFull?.type : '',
    status: dataAnimeFull?.status ? dataAnimeFull?.status : '',
    year: dataAnimeFull?.year ? dataAnimeFull?.year : 'TBA',
    genre: dataAnimeFull?.genres ? dataAnimeFull?.genres.map((item) => ' ' + item.name) : [],
    themes: dataAnimeFull?.themes ? dataAnimeFull?.themes.map((item) => ' ' + item.name) : [],
  }

  const moreInfoList = {
    episode: dataAnimeFull?.episodes ? dataAnimeFull?.episodes : 0,
    duration: dataAnimeFull?.duration ? dataAnimeFull?.duration : '',
    studios: dataAnimeFull?.studios ? dataAnimeFull?.studios.map((item) => ' ' + item.name) : [],
    score: dataAnimeFull?.score ? dataAnimeFull?.score : 0,
    ranked: dataAnimeFull?.rank ? dataAnimeFull?.rank : 0,
    popularity: dataAnimeFull?.popularity ? dataAnimeFull?.popularity : 0,
  }

  if (dataAnimeFull)
    return (
      <main className='p-4 max-w-[1400px] m-auto flex flex-col gap-8'>
        <article className='overlay glassmorphism rounded-xl overflow-hidden p-4'>
          <article className=' flex flex-col items-center md:flex-row md:items-start gap-4 relative'>
            <article>
              <img src={dataAnimeFull?.images?.webp?.large_image_url} alt={dataAnimeFull?.title} className='rounded w-75' />
            </article>

            <article className='pt-4 flex flex-col justify-start w-full'>
              <h2 className='text-3xl font-basicaline border-b-2 border-primary mb-4'>{dataAnimeFull?.title}</h2>
              <ModalList items={mainList} />
            </article>
          </article>
        </article>

        {relations.length > 0 ? (
          <section className='flex gap-4 flex-wrap'>
            {relations.map((el) => (
              <section className='flex flex-col gap-1 p-1 px-4  rounded overlay glassmorphism overflow-hidden'>
                <p className='text-orange-400 relative'>{el.relation}:</p>
                <abbr title={el.entry[0].name} className='no-underline' onClick={() => openModalOnClick({ id: el.entry[0].mal_id, type: el.entry[0].type })}>
                  <h3 className='relative overflow-hidden text-ellipsis whitespace-nowrap cursor-pointer w-90 p-2 hover:text-primary'>{el.entry[0].name}</h3>
                </abbr>
              </section>
            ))}
          </section>
        ) : null}

        <article className='grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
          <article className='overlay p-4 rounded-xl overflow-hidden glassmorphism md:col-span-2'>
            <section className='relative h-auto'>
              <h2 className='text-2xl font-basicaline'>Synopsis</h2>
              <p className='px-4 w-full h-45 overflow-auto text-white'>{dataAnimeFull?.synopsis}</p>
            </section>
          </article>

          <article className='overlay glassmorphism p-4 rounded-xl overflow-hidden'>
            <section className='relative flex flex-col gap-2'>
              <h2 className='font-basicaline text-2xl'>Trailer</h2>
              <LiteYouTubeEmbed id={dataAnimeFull?.trailer.youtube_id} title={dataAnimeFull?.title} poster='maxresdefault' />
            </section>
          </article>

          <article className='overlay glassmorphism p-4 rounded-xl overflow-hidden'>
            <section className='relative'>
              <h2 className='font-basicaline text-2xl'>More info</h2>
              <section className='px-4'>
                <ModalList items={moreInfoList} />
              </section>
            </section>
          </article>
        </article>

        {recommendations?.length > 0 ? (
          <section className='p-4 rounded-xl flex flex-col gap-4 overflow-hidden overlay glassmorphism'>
            <h2 className='font-basicaline text-2xl relative'>Recommendations</h2>
            <article class='relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
              {recommendations?.map((data) => (
                <MiniCard image={data.entry.images.webp.large_image_url} title={data.entry.title} text={`id: ${data.entry.mal_id}`} highlight='' />
              ))}
            </article>
          </section>
        ) : null}
      </main>
    )
}

export default ModalAnimeInfo
