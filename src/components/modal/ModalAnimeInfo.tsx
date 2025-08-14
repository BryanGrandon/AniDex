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
  const [data, setData] = useState<data_modal_anime>()
  const [dataRecommendations, setDataRecommendations] = useState<data_recommendation>()

  const delay = (ms: number) => new Promise((res) => setTimeout(res, ms))

  const fetchWithDelay = async () => {
    const urls = [`https://api.jikan.moe/v4/anime/${id}/full`, `https://api.jikan.moe/v4/anime/${id}/recommendations`]
    for (const url of urls) {
      const res = await fetch(url)
      let json = await res.json()
      if (url == `https://api.jikan.moe/v4/anime/${id}/full`) setData(json.data)
      else if (url == `https://api.jikan.moe/v4/anime/${id}/recommendations`) setDataRecommendations(json)
      await delay(500)
    }
  }

  useEffect(() => {
    fetchWithDelay()
  }, [dataRecommendations])

  const recommendations = dataRecommendations?.data.slice(0, 7) ? dataRecommendations?.data.slice(0, 7) : []

  if (data)
    return (
      <main className='p-4 max-w-[1400px] m-auto flex flex-col gap-8'>
        <article className='overlay rounded-xl overflow-hidden p-4'>
          <article className=' flex flex-col items-center md:flex-row lg:items-start gap-4 relative'>
            <article>
              <img src={data?.images?.webp?.large_image_url} alt={data?.title} className='rounded w-75' />
            </article>

            <article className='pt-4 flex flex-col justify-between gap-3 w-full'>
              <section>
                <h2 className='text-3xl font-basicaline border-b-2 border-primary mb-4'>{data?.title}</h2>
                <TextModal textMain={`Titles alternative:`} textSecondary={`${data?.titles.map((item) => item.title)}`} />
                <TextModal textMain={`genre:`} textSecondary={`${data?.genres.map((item) => ' ' + item.name)}`} />
                <TextModal textMain={`themes:`} textSecondary={`${data?.themes.map((item) => ' ' + item.name)}`} />
                <TextModal textMain={`status:`} textSecondary={`${data?.status}`} />
                <TextModal textMain={`rating:`} textSecondary={`${data?.rating}`} />
                <TextModal textMain={`type:`} textSecondary={`${data?.type}`} />
              </section>

              <section className='flex gap-4 p-4 border rounded w-max'>
                <TextModal textMain={`score:`} textSecondary={`${data?.score}`} highlight={true} />
                <TextModal textMain={`ranked:`} textSecondary={`${data?.rank}`} highlight={true} />
                <TextModal textMain={`Popularity:`} textSecondary={`${data?.popularity}`} highlight={true} />
                <TextModal textMain={`Members:`} textSecondary={`${data?.members}`} highlight={true} />
              </section>
            </article>
          </article>
        </article>

        <article className='grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
          <article className='overlay p-4 rounded-xl overflow-hidden col-span-2'>
            <section className='relative h-auto'>
              <h2 className='text-2xl font-basicaline'>Synopsis</h2>
              <p className='prose px-4 w-full h-45 overflow-auto text-white'>{data?.synopsis}</p>
            </section>
          </article>
          <article className=' overlay p-4 rounded-xl overflow-hidden '>
            <section className='relative flex flex-col gap-2'>
              <h2 className='font-basicaline text-2xl'>Trailer</h2>
              <LiteYouTubeEmbed id={data?.trailer.youtube_id} title={data?.title} poster='maxresdefault' />
            </section>
          </article>
          <article className='overlay  p-4 rounded-xl overflow-hidden'>
            <section className='relative'>
              <h2 className='font-basicaline text-2xl'>More info</h2>
              <section className='px-4'>
                <TextModal textMain={`Year:`} textSecondary={`${data?.year}`} highlight={true} />
                <TextModal textMain={`Episodes:`} textSecondary={`${data?.episodes}`} highlight={true} />
                <TextModal textMain={`Duration:`} textSecondary={`${data?.duration}`} highlight={true} />
                <TextModal textMain={`Studios:`} textSecondary={`${data?.studios.map((item) => ' ' + item.name)}`} highlight={true} />
              </section>
            </section>
          </article>
        </article>

        <article className=''>
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
        </article>
      </main>
    )
}

export default ModalAnimeInfo
