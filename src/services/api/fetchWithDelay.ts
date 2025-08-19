type fetch_with_delay = {
  getData: Function
  urls: string[]
}

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms))

const fetchWithDelay = async ({ getData, urls }: fetch_with_delay) => {
  for (const url of urls) {
    const res = await fetch(url)
    let json = await res.json()
    getData(url, json)
    await delay(500)
  }
}

export default fetchWithDelay
