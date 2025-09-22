import { getIndividualInfo } from '../../../services/api/getIndividualInfo'
import { useEffect, useState } from 'preact/hooks'
import { useStore } from '@nanostores/preact'
import { search, searchApproach } from '../../../utils/storage/storage-search'
import useSearch from '../../../utils/hooks/useSearch'
import NavigationButton from '../ui/NavigationButton'

import type { anime_data } from '../../../utils/interfaces/anime-data'
import type { manga_data } from '../../../utils/interfaces/manga-data'

const ResultA = () => {
  const url = useStore(search)
  const type = useStore(searchApproach)

  const [info, setInfo] = type == 'anime' ? useState<anime_data[]>() : type == 'manga' ? useState<manga_data[]>() : useState()
  const { navigation } = useSearch()

  const getInfo = async () => {
    const json = await getIndividualInfo({ url })
    navigation.general(json.pagination)
    setInfo(json.data)
  }

  useEffect(() => {
    getInfo()
    console.log(url)
  }, [url])

  const handlerClickCard = ({ id }: { id: number }) => {
    localStorage.setItem('id', String(id))
    // window.location.href = `/info/${type}`
  }

  const onClickPrev = () => {
    navigation.prev.click()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const onClickNext = () => {
    navigation.next.click()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (info)
    return (
      <section className='p-4 flex flex-col gap-4'>
        <article className='grid grid-cols-[repeat(auto-fill,_minmax(11rem,_1fr))] gap-4'>
          {info?.map((data) => (
            <a
              href={`/info/${type}`}
              className='relative self-baseline overflow-hidden'
              onClick={() => handlerClickCard({ id: data.mal_id })}
              onMouseDown={() => handlerClickCard({ id: data.mal_id })}
            >
              <article className='test overflow-hidden rounded-xl relative'>
                <img src={data.images.webp.large_image_url} className='object-cover h-57 w-full' alt='' />
                <abbr title={data.title} className='no-underline absolute bottom-0 left-0 w-full'>
                  <h3 className='overflow-hidden text-ellipsis whitespace-nowrap cursor-pointer py-1 px-2 bg-dark-transparent'>{data.title}</h3>
                </abbr>
                <p className='absolute top-1 left-1 glassmorphism  px-2'>{data.type}</p>
                <p className='absolute top-1 right-1 glassmorphism py-0.3 px-2'>⭐{data.score}</p>
              </article>
            </a>
          ))}
        </article>
        <article className='flex align-center justify-center gap-1'>
          <NavigationButton text='Prev' isDisabled={navigation.prev.isDisabled} onClick={onClickPrev} />
          <NavigationButton text='Next' isDisabled={navigation.next.isDisabled} onClick={onClickNext} />
        </article>
      </section>
    )
}

export default ResultA
