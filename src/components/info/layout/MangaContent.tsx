import { useEffect, useState } from 'preact/hooks'
import type { recommendation_data } from '../../../utils/interfaces/recommendation-data'
import { getIndividualInfo } from '../../../services/api/getIndividualInfo'
import ObjectList from '../ui/ObjectList'
import ContainerInfo from '../ui/ContainerInfo'
import MiniCard from '../../core/ui/MiniCard'
import type { manga_data, specific_info_about_manga } from '../../../utils/interfaces/manga-data'
import FloatingPanel from '../../core/ui/FloatingPanel'

const MangaContent = () => {
  let id = localStorage.getItem('id')
  const [data, setData] = useState<specific_info_about_manga>()
  const [recommendationsData, setRecommendationsData] = useState<recommendation_data>()

  const urlFullData = `https://api.jikan.moe/v4/manga/${id}/full`
  const urlRecommendations = `https://api.jikan.moe/v4/manga/${id}/recommendations`

  const getInfo = async () => {
    const json = await getIndividualInfo({ url: urlFullData })
    const info: manga_data = json.data
    const object: specific_info_about_manga = {
      title: info?.title,
      image: info?.images.webp.large_image_url,
      synopsis: info?.synopsis,
      background: info?.background,
      primaryList: {
        ['alternative titles']: info?.titles ? info?.titles.map((el) => ' ' + el.title) : [],
        type: info?.type ? info?.type : '',
        status: info?.status ? info?.status : '',
        chapters: info?.chapters ? info?.chapters : 'Unknown',
        genres: info?.genres ? info.genres.map((el) => ' ' + el.name) : [],
        themes: info?.themes ? info?.themes.map((el) => ' ' + el.name) : [],
        ['Explicit Genres']: info?.explicit_genres ? info?.explicit_genres : '',
        volumes: info?.volumes ? info?.volumes : '',
      },
      secondaryList: {
        authors: info?.authors.map((e) => ' ' + e.name),
        score: info?.score ? '#' + info?.score : '',
        ranked: info?.rank ? '#' + info?.rank : '',
        popularity: info?.popularity ? '#' + info?.popularity : '',
      },
      relations: info?.relations ? info?.relations : [],
    }
    setData(object)
    const recommendation = await getIndividualInfo({ url: urlRecommendations })
    setRecommendationsData(recommendation)
  }
  const recommendations = recommendationsData ? recommendationsData.data.slice(0, 6) : []

  useEffect(() => {
    getInfo()
  }, [])

  const handlerClickRelations = ({ id, type }: { id: number; type: string }) => {
    localStorage.setItem('id', String(id))
    window.location.href = `/info/${type}`
  }

  if (data)
    return (
      <main className='px-4 pb-4 max-w-[1400px] m-auto flex flex-col gap-4'>
        <article className='overlay glassmorphism rounded-xl overflow-hidden p-4'>
          <article className=' flex flex-col items-center md:flex-row md:items-start gap-4 relative'>
            <article>
              <img src={data.image} alt={data.title + '-img'} className='rounded w-75' />
              <p>{id}</p>
            </article>

            <article className='pt-4 flex flex-col justify-start w-full'>
              <h2 className='text-3xl font-basicaline border-b-2 border-primary mb-4'>{data.title}</h2>
              <section className='flex flex-col gap-1'>
                <ObjectList object={data.primaryList} />
              </section>
            </article>
          </article>
        </article>

        <article className='grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
          <ContainerInfo title='Synopsis' moreClass='md:col-span-2 lg:col-span-3' children={String(data.synopsis)} />

          <ContainerInfo title='More info'>
            <section className='px-4'>
              <ObjectList object={data.secondaryList} />
            </section>
          </ContainerInfo>
        </article>

        {data.background ? <ContainerInfo title='Background' children={String(data.background)} /> : null}

        {data.relations.length > 0 ? (
          <section className='gap-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
            {data.relations.map((el) => (
              <section className='flex flex-col p-1 px-4 py-2  rounded overlay glassmorphism overflow-hidden'>
                <p className='text-orange-400 relative text-xl font-basicaline tracking-wider'>
                  {el.relation}: {el.entry[0].type}
                </p>
                <abbr title={el.entry[0].name} className='no-underline' onClick={() => handlerClickRelations({ id: el.entry[0].mal_id, type: el.entry[0].type })}>
                  <h3 className='relative overflow-hidden text-ellipsis whitespace-nowrap cursor-pointer p-2 hover:text-primary'>{el.entry[0].name}</h3>
                </abbr>
              </section>
            ))}
          </section>
        ) : null}

        {recommendations?.length > 0 ? (
          <section className='p-4 rounded-xl flex flex-col gap-4 overflow-hidden overlay glassmorphism'>
            <h2 className='font-basicaline text-2xl relative'>Recommendations</h2>
            <article class='relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
              {recommendations?.map((data) => (
                <MiniCard image={data.entry.images.webp.large_image_url} title={data.entry.title} text={`id: ${data.entry.mal_id}`} id={data.entry.mal_id} type={'manga'} />
              ))}
            </article>
          </section>
        ) : null}

        <FloatingPanel />
      </main>
    )
}

export default MangaContent
