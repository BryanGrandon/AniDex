const getIndividualInfo = async ({ url }: { url: string }) => {
  const res = await fetch(url)
  let json = await res.json()
  return json
}

export { getIndividualInfo }
