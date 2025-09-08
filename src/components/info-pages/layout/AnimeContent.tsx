import { useEffect, useState } from 'preact/hooks'
import LiteYouTubeEmbed from 'react-lite-youtube-embed'
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'
import ObjectList from '../ui/ObjectList'
import ContainerInfo from '../ui/ContainerInfo'
import MiniCard from '../../core/ui/MiniCard'
import { getIndividualInfo } from '../../../services/api/getIndividualInfo'
import type { anime_data, specific_info_about_anime } from '../../../utils/interfaces/anime-data'
import type { recommendation_data } from '../../../utils/interfaces/recommendation-data'
import FloatingPanel from '../../core/ui/FloatingPanel'

const AnimeContent = () => {
  let id = localStorage.getItem('id')
  const [data, setData] = useState<specific_info_about_anime>()
  const [recommendationsData, setRecommendationsData] = useState<recommendation_data>()

  const urlFullData = `https://api.jikan.moe/v4/anime/${id}/full`
  const urlRecommendations = `https://api.jikan.moe/v4/anime/${id}/recommendations`

  const getInfo = async () => {
    const json = await getIndividualInfo({ url: urlFullData })

    const info: anime_data = json.data
    const object: specific_info_about_anime = {
      title: info?.title,
      image: info?.images.webp.large_image_url,
      synopsis: info?.synopsis,
      youtube_id: info?.trailer.youtube_id,
      background: info?.background,
      primaryList: {
        ['alternative titles']: info?.titles ? info?.titles.map((item) => ' ' + item.title).slice(0, 3) : [],
        type: info?.type ? info?.type : '',
        episode: info?.episodes ? info?.episodes : 0,
        duration: info?.duration ? info?.duration : '',
        status: info?.status ? info?.status : '',
        year: info?.year ? info?.year : 'TBA',
        ['Explicit Genres']: info?.explicit_genres ? info?.explicit_genres : '',
        genres: info?.genres ? info?.genres.map((item) => ' ' + item.name) : [],
        themes: info?.themes ? info?.themes.map((item) => ' ' + item.name) : [],
      },
      secondaryList: {
        studios: info?.studios ? info?.studios.map((item) => ' ' + item.name) : [],
        score: info?.score ? '#' + info?.score : 0,
        ranked: info?.rank ? '#' + info?.rank : 0,
        popularity: info?.popularity ? '#' + info?.popularity : 0,
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
            <img src={data?.image} alt={data?.title + '-img'} className='rounded max-w-50' />

            <article className='pt-4 flex flex-col justify-start w-full'>
              <h2 className='text-3xl font-basicaline border-b-2 border-primary mb-4'>{data?.title}</h2>
              <ObjectList object={data?.primaryList} />
            </article>
          </article>
        </article>

        <article className='grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
          <ContainerInfo title='Synopsis' moreClass='md:col-span-2' children={data?.synopsis} />

          <ContainerInfo title='Trailer'>
            <LiteYouTubeEmbed id={data?.youtube_id} title={data?.title} poster='maxresdefault' />
          </ContainerInfo>

          <ContainerInfo title='More Info'>
            <section className='px-4'>
              <ObjectList object={data?.secondaryList} />
            </section>
          </ContainerInfo>
        </article>

        {data?.relations.length > 0 ? (
          <section className='gap-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
            {data?.relations.map((el) => (
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
                <MiniCard image={data.entry.images.webp.large_image_url} title={data.entry.title} text={`id: ${data.entry.mal_id}`} id={data.entry.mal_id} type={'anime'} />
              ))}
            </article>
          </section>
        ) : null}
        <FloatingPanel />
      </main>
    )
}

export default AnimeContent
