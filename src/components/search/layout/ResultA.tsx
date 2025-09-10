import { getIndividualInfo } from '../../../services/api/getIndividualInfo'
import { useEffect, useState } from 'preact/hooks'
import { useStore } from '@nanostores/preact'
import { search } from '../../../utils/storage/storage-search'
import useSearch from '../../../utils/hooks/useSearch'

const ResultA = () => {
  const url = useStore(search)
  const { getData } = useSearch('anime')
  const [info, setInfo] = useState()

  const getInfo = async () => {
    console.log(url)
    const json = await getIndividualInfo({ url })
    console.log(json)

    setInfo(json.data)
  }

  useEffect(() => {
    getInfo()
  }, [url])

  if (info)
    return (
      <section>
        <h2>Results</h2>
        <article>
          {info?.map((e) => (
            <p>{e.title}</p>
          ))}
        </article>
      </section>
    )
}

export default ResultA
