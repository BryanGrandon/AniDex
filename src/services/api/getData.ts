interface get_Data {
  url: string
  page: number
  limit: number
  more?: string
}

const getData = async ({ url, page, limit, more }: get_Data) => {
  const response = await fetch(`${url}?page=${page}&limit=${limit}${more ? `&${more}` : ''}`)
  const data = await response.json()
  return data
}

export { getData }

// Add type for the response
