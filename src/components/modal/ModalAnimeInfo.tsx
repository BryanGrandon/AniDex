import { useEffect, useState } from 'preact/hooks'
import TextModal from './TextModal'
import type { data_modal_anime } from '../../utils/interfaces/data-modal-anime'
import type { data_recommendation } from '../../utils/interfaces/data-recommendation'
import LiteYouTubeEmbed from 'react-lite-youtube-embed'
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'
import MiniCard from '../ui/MiniCard'
import fetchWithDelay from '../../services/api/fetchWithDelay'

type Modal_Anime = {
  id: number
}

const ModalAnimeInfo = ({ id }: Modal_Anime) => {
  const [dataAnimeFull, setDataAnimeFull] = useState<data_modal_anime>()
  const [dataAnimeRecommendations, setDataAnimeRecommendations] = useState<data_recommendation>()

  const urlAnimeFull = `https://api.jikan.moe/v4/anime/${id}/full`
  const urlAnimeRecommendations = `https://api.jikan.moe/v4/anime/${id}/recommendations`

  const getData = (url: string, json: any) => {
    if (url == urlAnimeFull) setDataAnimeFull(json.data)
    else if (url == urlAnimeRecommendations) setDataAnimeRecommendations(json)
  }
  useEffect(() => {
    fetchWithDelay({ getData, urls: [urlAnimeFull, urlAnimeRecommendations] })
  }, [])

  const recommendations = dataAnimeRecommendations?.data.slice(0, 6) ? dataAnimeRecommendations?.data.slice(0, 6) : []
  const relations = dataAnimeFull?.relations ? dataAnimeFull?.relations : []

  if (dataAnimeFull)
    return (
      <main className='p-4 max-w-[1400px] m-auto flex flex-col gap-8'>
        <article className='overlay glassmorphism rounded-xl overflow-hidden p-4'>
          <article className=' flex flex-col items-center md:flex-row lg:items-start gap-4 relative'>
            <article>
              <img src={dataAnimeFull?.images?.webp?.large_image_url} alt={dataAnimeFull?.title} className='rounded w-75' />
            </article>

            <article className='pt-4 flex flex-col justify-between gap-2 w-full'>
              <section>
                <h2 className='text-3xl font-basicaline border-b-2 border-primary mb-4'>{dataAnimeFull?.title}</h2>
                <TextModal textMain={`Alternative titles:`} textSecondary={`${dataAnimeFull?.titles.map((item) => ' ' + item.title).slice(0, 3)}`} />
                <TextModal textMain={`Type:`} textSecondary={`${dataAnimeFull?.type}`} />
                <TextModal textMain={`Status:`} textSecondary={`${dataAnimeFull?.status}`} />
                <TextModal textMain={`Year:`} textSecondary={`${dataAnimeFull?.year}`} highlight={true} />
                <TextModal textMain={`Genre:`} textSecondary={`${dataAnimeFull?.genres.map((item) => ' ' + item.name)}`} />
                {dataAnimeFull?.themes.length > 0 ? <TextModal textMain={`Themes:`} textSecondary={`${dataAnimeFull?.themes.map((item) => ' ' + item.name)}`} /> : null}
              </section>

              {relations.length > 0 ? (
                <section>
                  {relations.map((el) => (
                    <section className='flex flex-col gap-1'>
                      <p className='text-orange-400'>{el.relation}:</p>
                      <p className='hover:text-primary px-6 cursor-pointer'>{el.entry.map((e) => e.name)}</p>
                    </section>
                  ))}
                </section>
              ) : null}
            </article>
          </article>
        </article>

        <article className='grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
          <article className='overlay p-4 rounded-xl overflow-hidden glassmorphism md:col-span-2'>
            <section className='relative h-auto'>
              <h2 className='text-2xl font-basicaline'>Synopsis</h2>
              <p className='px-4 w-full h-45 overflow-auto text-white'>{dataAnimeFull?.synopsis}</p>
            </section>
          </article>
          <article className=' overlay p-4 rounded-xl overflow-hidden'>
            <section className='relative flex flex-col gap-2'>
              <h2 className='font-basicaline text-2xl'>Trailer</h2>
              <LiteYouTubeEmbed id={dataAnimeFull?.trailer.youtube_id} title={dataAnimeFull?.title} poster='maxresdefault' />
            </section>
          </article>
          <article className='overlay glassmorphism p-4 rounded-xl overflow-hidden'>
            <section className='relative'>
              <h2 className='font-basicaline text-2xl'>More info</h2>
              <section className='px-4'>
                <TextModal textMain={`Episodes:`} textSecondary={`${dataAnimeFull?.episodes}`} highlight={true} />
                <TextModal textMain={`Duration:`} textSecondary={`${dataAnimeFull?.duration}`} highlight={true} />
                <TextModal textMain={`Studios:`} textSecondary={`${dataAnimeFull?.studios.map((item) => ' ' + item.name)}`} highlight={true} />
                <TextModal textMain={`Score:`} textSecondary={`#${dataAnimeFull?.score}`} highlight={true} />
                <TextModal textMain={`Ranked:`} textSecondary={`#${dataAnimeFull?.rank}`} highlight={true} />
                <TextModal textMain={`Popularity:`} textSecondary={`#${dataAnimeFull?.popularity}`} highlight={true} />
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
