import { useEffect, useState } from 'preact/hooks'
import TextModal from './TextModal'
import type { data_modal_anime } from '../../utils/interfaces/data-modal-anime'
import type { data_recommendation } from '../../utils/interfaces/data-recommendation'
import LiteYouTubeEmbed from 'react-lite-youtube-embed'
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'
import MiniCard from '../ui/MiniCard'

type Modal_Anime = {
  id: number
}

const ModalAnimeInfo = ({ id }: Modal_Anime) => {
  const [dataAnimeFull, setDataAnimeFull] = useState<data_modal_anime>()
  const [dataAnimeRecommendations, setDataAnimeRecommendations] = useState<data_recommendation>()

  const urlAnimeFull = `https://api.jikan.moe/v4/anime/${id}/full`
  const urlAnimeRecommendations = `https://api.jikan.moe/v4/anime/${id}/recommendations`

  const delay = (ms: number) => new Promise((res) => setTimeout(res, ms))

  const fetchWithDelay = async () => {
    const urls = [urlAnimeFull, urlAnimeRecommendations]

    for (const url of urls) {
      const res = await fetch(url)
      let json = await res.json()

      if (url == urlAnimeFull) setDataAnimeFull(json.data)
      else if (url == urlAnimeRecommendations) setDataAnimeRecommendations(json)
      await delay(500)
    }
  }

  useEffect(() => {
    fetchWithDelay()
  }, [])

  const recommendations = dataAnimeRecommendations?.data.slice(0, 7) ? dataAnimeRecommendations?.data.slice(0, 7) : []
  const relations = dataAnimeFull?.relations ? dataAnimeFull?.relations : []

  if (dataAnimeFull)
    return (
      <main className='p-4 max-w-[1400px] m-auto flex flex-col gap-8'>
        <article className='overlay rounded-xl overflow-hidden p-4'>
          <article className=' flex flex-col items-center md:flex-row lg:items-start gap-4 relative'>
            <article>
              <img src={dataAnimeFull?.images?.webp?.large_image_url} alt={dataAnimeFull?.title} className='rounded w-75' />
            </article>

            <article className='pt-4 flex flex-col justify-between gap-3 w-full'>
              <section>
                <h2 className='text-3xl font-basicaline border-b-2 border-primary mb-4'>{dataAnimeFull?.title}</h2>
                <TextModal textMain={`Titles alternative:`} textSecondary={`${dataAnimeFull?.titles.map((item) => ' ' + item.title)}`} />
                <TextModal textMain={`genre:`} textSecondary={`${dataAnimeFull?.genres.map((item) => ' ' + item.name)}`} />
                <TextModal textMain={`themes:`} textSecondary={`${dataAnimeFull?.themes.map((item) => ' ' + item.name)}`} />
                <TextModal textMain={`status:`} textSecondary={`${dataAnimeFull?.status}`} />
                <TextModal textMain={`rating:`} textSecondary={`${dataAnimeFull?.rating}`} />
                <TextModal textMain={`type:`} textSecondary={`${dataAnimeFull?.type}`} />
              </section>

              <section className='flex gap-4 p-4 border rounded w-max'>
                <TextModal textMain={`score:`} textSecondary={`${dataAnimeFull?.score}`} highlight={true} />
                <TextModal textMain={`ranked:`} textSecondary={`${dataAnimeFull?.rank}`} highlight={true} />
                <TextModal textMain={`Popularity:`} textSecondary={`${dataAnimeFull?.popularity}`} highlight={true} />
                <TextModal textMain={`Members:`} textSecondary={`${dataAnimeFull?.members}`} highlight={true} />
              </section>
            </article>
          </article>
        </article>

        <article className='grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
          <article className='overlay p-4 rounded-xl overflow-hidden col-span-2'>
            <section className='relative h-auto'>
              <h2 className='text-2xl font-basicaline'>Synopsis</h2>
              <p className='prose px-4 w-full h-45 overflow-auto text-white'>{dataAnimeFull?.synopsis}</p>
            </section>
          </article>
          <article className=' overlay p-4 rounded-xl overflow-hidden '>
            <section className='relative flex flex-col gap-2'>
              <h2 className='font-basicaline text-2xl'>Trailer</h2>
              <LiteYouTubeEmbed id={dataAnimeFull?.trailer.youtube_id} title={dataAnimeFull?.title} poster='maxresdefault' />
            </section>
          </article>
          <article className='overlay  p-4 rounded-xl overflow-hidden'>
            <section className='relative'>
              <h2 className='font-basicaline text-2xl'>More info</h2>
              <section className='px-4'>
                <TextModal textMain={`Year:`} textSecondary={`${dataAnimeFull?.year}`} highlight={true} />
                <TextModal textMain={`Episodes:`} textSecondary={`${dataAnimeFull?.episodes}`} highlight={true} />
                <TextModal textMain={`Duration:`} textSecondary={`${dataAnimeFull?.duration}`} highlight={true} />
                <TextModal textMain={`Studios:`} textSecondary={`${dataAnimeFull?.studios.map((item) => ' ' + item.name)}`} highlight={true} />
              </section>
            </section>
          </article>
        </article>

        <article className='overlay p-4 rounded-xl overflow-hidden'>
          {recommendations?.length > 0 ? (
            <section className='overlay p-4 rounded-xl overflow-hidden'>
              <h2 className='font-basicaline text-2xl relative'>Recommendations</h2>
              <article class='flex flex-col gap-2 relative'>
                {recommendations?.map((data) => (
                  <MiniCard image={data.entry.images.webp.large_image_url} title={data.entry.title} text={data.entry.title} highlight='' />
                ))}
              </article>
            </section>
          ) : null}
          {relations?.length > 0 ? (
            <section>
              {relations?.map((el) => (
                <section>
                  <p>{el.relation}</p>
                  {el.entry.map((el) => (
                    <section>
                      {/* Create function for the images */}
                      <p>{el.name}</p>
                    </section>
                  ))}
                </section>
              ))}
            </section>
          ) : null}
        </article>
      </main>
    )
}

export default ModalAnimeInfo
