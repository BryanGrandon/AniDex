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
    setData(json)
  }

  useEffect(() => {
    getAnime()
  }, [])

  if (data)
    return (
      <article className='p-4'>
        <header>
          <h2 className='text-2xl font-basicaline'>{data?.data?.title}</h2>
        </header>
        <article className='flex flex-row gap-4 text-white test'>
          <section className='flex justify-center items-center p-4'>
            <img src={data?.data?.images?.webp?.large_image_url} alt={data?.data?.title} className='rounded-xl min-w-80 max-h-120' />
          </section>
          <section>
            <p>Score: {data?.data?.score}</p>
            <p>Episodes: {data?.data?.episodes}</p>
            <p>Status: {data?.data?.status}</p>
            <p>Synopsis: {data?.data?.synopsis}</p>
          </section>
        </article>
      </article>
    )
}

export default ModalAnimeInfo
