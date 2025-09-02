import useSearch from '../../utils/hooks/useSearch'

const ResultA = () => {
  const { url } = useSearch('anime')

  return (
    <div>
      <p>Url: {url}</p>
    </div>
  )
}

export default ResultA
