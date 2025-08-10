import { useEffect, useState } from 'preact/hooks'
import type { data_modal_anime } from '../../utils/interfaces/data-modal-anime'

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
      <article className='p-4'>
        <header>
          <h2 className='text-2xl font-basicaline'>{data?.title}</h2>
        </header>
        <article className='flex flex-col lg:flex-row gap-4 text-white test'>
          <section className='flex justify-center items-center p-4'>
            <img src={data?.images?.webp?.large_image_url} alt={data?.title} className='rounded-xl min-h-80' />
          </section>
          <section>
            <p>Score: {data?.score}</p>
            <p>Status: {data?.status}</p>
            <p>Trailer: {data?.trailer.embed_url}</p>
            <p>favorites: {data?.favorites}</p>
            <p>rank: {data?.rank}</p>
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
            <p>genre: {data?.genres.map((data) => data.name)}</p>
            <p>themes: </p>
          </section>
        </article>
      </article>
    )
}

export default ModalAnimeInfo
