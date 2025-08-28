import data from '../../data.json'

const Filter = () => {
  const filterData = data.search.anime

  return (
    <details>
      <summary className='text-2xl font-basicaline tracking-wide'>Filter</summary>
      <section>
        {filterData.types.map((ev) => (
          <p>{ev}</p>
        ))}
      </section>
    </details>
  )
}

export default Filter
