type modal_list = {
  items: Object
}

const ModalList = ({ items }: modal_list) => {
  const list = Object.entries(items)

  return (
    <>
      {list.map((el) =>
        String(el[1]).length > 0 ? (
          <p className='font-basicaline text-lg tracking-wider'>
            <span className='capitalize text-orange-400 font-semibold'>{el[0]}</span>: <span>{String(el[1])}</span>
          </p>
        ) : null
      )}
    </>
  )
}

export default ModalList
