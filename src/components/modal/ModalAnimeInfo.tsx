import { useEffect, useState } from 'preact/hooks'
import type { data_modal_anime } from '../../utils/interfaces/data-modal-anime'
import TextModal from './TextModal'
import LiteYouTubeEmbed from 'react-lite-youtube-embed'
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

type Modal_Anime = {
  id: number
}

const ModalAnimeInfo = ({ id }: Modal_Anime) => {
  const [data, setData] = useState<data_modal_anime>()

  const getAnime = async () => {
    const res = fetch(`https://api.jikan.moe/v4/anime/${id}/full`)
    const json = await (await res).json()
    setData(json.data)
  }

  useEffect(() => {
    getAnime()
  }, [])

  if (data)
    return (
      <main className='p-4 max-w-[1400px] m-auto flex flex-col gap-8'>
        <article className='overlay rounded-xl overflow-hidden p-4'>
          <article className=' flex flex-col items-center md:flex-row sm:items-start gap-4 relative'>
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

        <article className='flex justify-between w-full gap-4'>
          <article className='overlay p-4 rounded-xl overflow-hidden w-full'>
            <section className='relative h-auto'>
              <h2 className='text-2xl font-basicaline'>Synopsis</h2>
              <p className=''>{data?.synopsis}</p>
            </section>
          </article>
          <article className='min-w-90 overlay p-4 rounded-xl overflow-hidden m-auto'>
            <section className='relative flex flex-col gap-2'>
              <LiteYouTubeEmbed id={data?.trailer.youtube_id} title={data?.title} poster='maxresdefault' webp />
              <TextModal textMain={`Duration:`} textSecondary={`${data?.duration}`} highlight={true} />
            </section>
          </article>
        </article>
      </main>
    )
}

export default ModalAnimeInfo
