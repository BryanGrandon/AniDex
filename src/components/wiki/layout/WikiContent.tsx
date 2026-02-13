import { useEffect, useState } from 'preact/hooks'
import useWiki from '../../../utils/hooks/useWiki'
import type { specific_info_about_anime } from '../../../utils/interfaces/anime-data'
import type { specific_info_about_manga } from '../../../utils/interfaces/manga-data'
import type { recommendation_wiki } from '../../../utils/interfaces/wiki/recommendation-wiki'

const WikiContent = () => {
  const [wiki, setWiki] = useState<specific_info_about_anime | specific_info_about_manga>()
  const [recommendations, setRecommendations] = useState<recommendation_wiki>()
  const { getDataWiki } = useWiki()

  const getData = async () => {
    const { data, recommendation } = await getDataWiki()
    setRecommendations(recommendation)
    setWiki(data)
  }
  useEffect(() => {
    getData()
  }, [])

  return (
    <section>
      <h2>DATA</h2>
      <h1 class='test'>{wiki?.title}</h1>
    </section>
  )
}

export default WikiContent
