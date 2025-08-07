import { useEffect, useState } from 'preact/hooks'
import type { data_modal_anime } from '../../utils/interfaces/data-modal-anime'

type Modal_Anime = {
  id: number
}

const ModalAnime = ({ id }: Modal_Anime) => {
  const [data, setData] = useState<data_modal_anime>()

  const getAnime = async () => {
    const res = fetch(`https://api.jikan.moe/v4/anime/${id}/full`)
    const json = await (await res).json()
    setData(json)
    console.log(json)
  }

  useEffect(() => {
    getAnime()
  }, [])

  if (data)
    return (
      <article>
        <h2>{data?.data?.title}</h2>
      </article>
    )
}

export default ModalAnime
