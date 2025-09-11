import { getIndividualInfo } from '../../../services/api/getIndividualInfo'
import { useEffect, useState } from 'preact/hooks'
import { useStore } from '@nanostores/preact'
import { search } from '../../../utils/storage/storage-search'
import useSearch from '../../../utils/hooks/useSearch'

const ResultA = () => {
  const url = useStore(search)

  const [info, setInfo] = useState()
  const { navigation } = useSearch()

  const getInfo = async () => {
    console.log(url)
    const json = await getIndividualInfo({ url })
    setInfo(json.data)
    navigation.general(json.pagination)
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
        <article>
          <button className={`test py-1 px-3 ${navigation.prev.isDisabled ? 'bg-gray-700' : ''}`} onClick={navigation.prev.click}>
            Prev
          </button>
          <button className={`test py-1 px-3 ${navigation.next.isDisabled ? 'bg-gray-700' : ''}`} onClick={navigation.next.click}>
            Next
          </button>
        </article>
      </section>
    )
}

export default ResultA
