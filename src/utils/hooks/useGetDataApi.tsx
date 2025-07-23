import { useEffect, useState } from 'preact/hooks'
import { getDataUrl } from '../../services/api/getDataUrl'

const useGetDataApi = (url: string): any => {
  const [data, setData] = useState()

  const getDataApi = async (url: string) => {
    let response = await getDataUrl({ url })
    let arr = [...new Set<string>(response.data?.map(JSON.stringify))]
    let a: any[] = []
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
