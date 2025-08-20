import { useEffect, useState } from 'preact/hooks'
import fetchWithDelay from '../../services/api/fetchWithDelay'
import ModalList from './ModalList'
import type { data_modal_manga } from '../../utils/interfaces/data-modal-manga'
import openModalOnClick from '../../utils/scripts/openModalOnClick'

type Props = {
  id: number
}

const ModalMangaInfo = ({ id }: Props) => {
  const [dataMangaFull, setDataMangaFull] = useState<data_modal_manga>()

  const urlAnimeFull = `https://api.jikan.moe/v4/manga/${id}/full`

  const getData = (url: string, json: any) => {
    if (url == urlAnimeFull) setDataMangaFull(json.data)
  }
  useEffect(() => {
    fetchWithDelay({ getData, urls: [urlAnimeFull] })
  }, [])

  const mainList = {
    ['alternative titles']: dataMangaFull?.titles ? dataMangaFull?.titles.map((el) => ' ' + el.title) : [],
    type: dataMangaFull?.type ? dataMangaFull?.type : '',
    status: dataMangaFull?.status ? dataMangaFull?.status : '',
    chapters: dataMangaFull?.chapters ? dataMangaFull?.chapters : 'Undefined',
    genres: dataMangaFull?.genres ? dataMangaFull.genres.map((el) => ' ' + el.name) : [],
    themes: dataMangaFull?.themes ? dataMangaFull.themes.map((el) => ' ' + el.name) : [],
    volumes: dataMangaFull?.volumes ? dataMangaFull?.volumes : '',
  }

  const relations = dataMangaFull?.relations ? dataMangaFull?.relations : []

  return (
    <main className='px-4 pb-4 max-w-[1400px] m-auto flex flex-col gap-8'>
      <article className='overlay glassmorphism rounded-xl overflow-hidden p-4'>
        <article className=' flex flex-col items-center md:flex-row md:items-start gap-4 relative'>
          <article>
            <img src={dataMangaFull?.images?.webp?.large_image_url} alt={dataMangaFull?.title} className='rounded w-75' />
          </article>

          <article className='pt-4 flex flex-col justify-start w-full'>
            <h2 className='text-3xl font-basicaline border-b-2 border-primary mb-4'>{dataMangaFull?.title}</h2>
            <section className='flex flex-col gap-1'>
              <ModalList items={mainList} />
            </section>
          </article>
        </article>
      </article>

      {relations.length > 0 ? (
        <section className='gap-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
          {relations.map((el) => (
            <section className='flex flex-col p-1 px-4 py-2  rounded overlay glassmorphism overflow-hidden'>
              <p className='text-orange-400 relative text-xl font-basicaline tracking-wider'>
                {el.relation}: {el.entry[0].type}
              </p>
              <abbr title={el.entry[0].name} className='no-underline' onClick={() => openModalOnClick({ id: el.entry[0].mal_id, type: el.entry[0].type })}>
                <h3 className='relative overflow-hidden text-ellipsis whitespace-nowrap cursor-pointer p-2 hover:text-primary'>{el.entry[0].name}</h3>
              </abbr>
            </section>
          ))}
        </section>
      ) : null}
    </main>
  )
}

export default ModalMangaInfo
