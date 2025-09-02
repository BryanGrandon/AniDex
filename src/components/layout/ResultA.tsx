import useSearch from '../../utils/hooks/useSearch'

const ResultA = () => {
  const { type, status, sfw, sort, orderBy } = useSearch('anime')

  return (
    <div>
      <p>Type: {type}</p>
      <p>Status: {status}</p>
      <p>Sfw: {sfw}</p>
      <p>Sort: {sort}</p>
      <p>Order By: {orderBy}</p>
    </div>
  )
}

export default ResultA
