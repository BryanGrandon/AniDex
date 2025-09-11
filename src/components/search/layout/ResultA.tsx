import { getIndividualInfo } from '../../../services/api/getIndividualInfo'
import { useEffect, useState } from 'preact/hooks'
import { useStore } from '@nanostores/preact'
import { search } from '../../../utils/storage/storage-search'
import useSearch from '../../../utils/hooks/useSearch'
import NavigationButton from '../ui/NavigationButton'

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
          <NavigationButton text='Prev' isDisabled={navigation.prev.isDisabled} onClick={navigation.prev.click} />
          <NavigationButton text='Next' isDisabled={navigation.next.isDisabled} onClick={navigation.next.click} />
        </article>
      </section>
    )
}

export default ResultA
