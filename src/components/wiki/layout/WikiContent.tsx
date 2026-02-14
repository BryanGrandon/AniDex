import { useEffect, useState } from 'preact/hooks'
import useWiki from '../../../utils/hooks/useWiki'
import type { specific_wiki_about_anime } from '../../../utils/interfaces/wiki/anime-wiki'
import type { specific_wiki_about_manga } from '../../../utils/interfaces/wiki/manga-wiki'

import type { recommendation_wiki } from '../../../utils/interfaces/wiki/recommendation-wiki'

const WikiContent = () => {
  const [wiki, setWiki] = useState<specific_wiki_about_anime | specific_wiki_about_manga>()
  const [recommendations, setRecommendations] = useState<recommendation_wiki>()
  const { getDataWiki, getIDAndType } = useWiki()

  const getData = async () => {
    const { data, recommendation } = await getDataWiki()
    setRecommendations(recommendation)
    setWiki(data)
  }

  useEffect(() => {
    getData()
  }, [])

  const { ID, TYPE } = getIDAndType()

  return (
    <main className='p-4'>
      <article className='max-w-400 mx-auto flex flex-col lg:flex-row p-4 gap-10'>
        <section>
          <h2>{TYPE}</h2>
          <picture className='flex w-80 overflow-x-hidden rounded-xl test'>
            <img src={wiki?.image} alt='' className='w-full' />
          </picture>
          <p>{wiki?.status}</p>
        </section>

        <section className='flex flex-col gap-4'>
          <section className='flex flex-col gap-2 '>
            <h2 className='font-basicaline font-semibold text-2xl tracking-wide'>{wiki?.title}</h2>
            <div className='font-basicaline tracking-wide'>
              {wiki?.alternative_titles.map((title) => (
                <span>
                  {title}
                  {title == wiki?.alternative_titles.at(-1) ? '' : ','}
                </span>
              ))}
            </div>
          </section>

          <section>
            <h3 className='text-xl font-basicaline'>Synopsis</h3>
            <p class='prose text-lg dark:prose-invert'>{wiki?.synopsis}</p>
          </section>
        </section>
      </article>

      <section className='flex flex-col gap-4 p-4'>
        {/* Component */}
        <section>
          <h3>Synopsis</h3>
          <p class='prose dark:prose-invert'>{wiki?.synopsis}</p>
        </section>

        <section>
          <h3>Genres</h3>
          <p>
            {wiki?.primaryList.genres.map((genre) => (
              <span>{genre}</span>
            ))}
          </p>
        </section>

        <section>
          <h3>Background</h3>
          <p class='prose dark:prose-invert'>{wiki?.background}</p>
        </section>
      </section>
    </main>
  )
}

export default WikiContent
