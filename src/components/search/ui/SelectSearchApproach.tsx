import useSearch from '../../../utils/hooks/useSearch'

const SelectSearchApproach = () => {
  const { assignSearchApproach } = useSearch()
  const variables = ['anime', 'manga']

  return (
    <article className='w-full grid grid-cols-2'>
      {variables.map((el) => (
        <button
          className={`border rounded shadow shadow-gray-800 text-2xl font-basicaline capitalize cursor-pointer py-1 hover:scale:105 font-medium ${
            assignSearchApproach.get == el ? 'bg-primary text-black' : 'bg-dark-transparent'
          }`}
          onClick={() => assignSearchApproach.set(el)}
        >
          {el}
        </button>
      ))}
    </article>
  )
}

export default SelectSearchApproach
