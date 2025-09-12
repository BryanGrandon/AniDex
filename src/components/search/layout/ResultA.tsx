import { getIndividualInfo } from '../../../services/api/getIndividualInfo'
import { useEffect, useState } from 'preact/hooks'
import { useStore } from '@nanostores/preact'
import { search, searchApproach } from '../../../utils/storage/storage-search'
import useSearch from '../../../utils/hooks/useSearch'
import NavigationButton from '../ui/NavigationButton'
import DefaultCard from '../../core/ui/DefaultCard'
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
  }, [url])

  if (info)
    return (
      <section className='p-4'>
        <article className='grid grid-cols-[repeat(auto-fill,_minmax(10rem,_1fr))] gap-4'>
          {info?.map((data) => (
            <article className='relative self-baseline'>
              <img src={data.images.webp.large_image_url} className=' object-cover max-h-60 w-full rounded' alt='' />
              <abbr title={data.title} className='no-underline'>
                <h3 className='overflow-hidden text-ellipsis whitespace-nowrap cursor-pointer p-2'>{data.title}</h3>
              </abbr>
            </article>
          ))}
        </article>
        <article>
          <NavigationButton text='Prev' isDisabled={navigation.prev.isDisabled} onClick={navigation.prev.click} />
          <NavigationButton text='Next' isDisabled={navigation.next.isDisabled} onClick={navigation.next.click} />
        </article>
      </section>
    )
}

export default ResultA
