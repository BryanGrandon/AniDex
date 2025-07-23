import { useEffect, useState } from 'preact/hooks'
import type { default_data } from '../../services/api/interfaces/default-data'
import type { array_data } from '../../services/api/interfaces/array-data'
import { getDataUrl } from '../../services/api/getDataUrl'

const useGetDataApi = (url: string) => {
  const [data, setData] = useState<default_data>()

  const getDataApi = async (url: string) => {
    let response = await getDataUrl({ url })
    let arr = [...new Set<string>(response.data.map(JSON.stringify))]
    let a: array_data[] = []
    arr.map((element) => a.push(JSON.parse(element)))
    response.data = a
    setData(response)
  }
  useEffect(() => {
    getDataApi(url)
  }, [])
  return data
}

export { useGetDataApi }
