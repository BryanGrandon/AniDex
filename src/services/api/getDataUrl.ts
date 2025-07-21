interface get_data_url {
  url: string
}

const getDataUrl = async ({ url }: get_data_url) => {
  const response = await fetch(url)
  const data = await response.json()
  return data
}

export { getDataUrl }

// Add type for the response
