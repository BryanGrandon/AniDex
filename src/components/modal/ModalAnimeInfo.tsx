import { useEffect, useState } from 'preact/hooks'
import type { data_modal_anime } from '../../utils/interfaces/data-modal-anime'
import StarIcon from '../icons/StarIcon'

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
      <article className='p-4 max-w-[1400px] m-auto'>
        <main className='overlay rounded-xl overflow-hidden p-4'>
          <article className=' flex flex-col items-center sm:flex-row sm:items-start gap-4 relative'>
            <article>
              <img src={data?.images?.webp?.large_image_url} alt={data?.title} className='rounded h-85 ' />
            </article>

            <article className='pt-4 flex flex-col justify-between gap-3 h-full'>
              <section>
                <h2 className='text-3xl font-basicaline border-b-2 border-primary mb-4'>{data?.title}</h2>
                <p>Titles alternative: {data?.titles.map((e) => e.title)}</p>
                <p>genre: {data?.genres.map((data) => data.name)}</p>
                <p>themes: {data?.themes.map((item) => item.name)} </p>
              </section>

              <section className='flex gap-4 p-4 border rounded'>
                <p class='flex gap-2'>
                  Score:{' '}
                  <span className='flex items-center gap-1'>
                    <StarIcon /> {data?.score}
                  </span>
                </p>
                <p>
                  Ranked: <span>#{data?.rank}</span>
                </p>
                <p>
                  Popularity: <span>#{data?.popularity}</span>
                </p>
                <p>
                  Members: <span>#{data?.members}</span>
                </p>
              </section>
            </article>
          </article>
        </main>

        <section className='flex justify-center items-center p-4'></section>
        <article className='p-4'></article>
        <article>
          <section>
            <p>Status: {data?.status}</p>
            <p>Trailer: {data?.trailer.embed_url}</p>
            <p>favorites: {data?.favorites}</p>
            <p>ranting: {data?.rating}</p>
          </section>
          <section>
            <h3>Synopsis</h3>
            <p className='prose text-white'>{data?.synopsis}</p>
          </section>
          <section>
            <h3>Info</h3>
            <p>Type: {data?.type}</p>
            <p>duration: {data?.duration}</p>
            <p>aired</p>
            <p>producers: {data?.producers.map((data) => data.name)}</p>
            <p>source: {data?.source}</p>
          </section>
        </article>
      </article>
    )
}

export default ModalAnimeInfo
