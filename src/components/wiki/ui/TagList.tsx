type tag_list = {
  label: string
  items: string[]
}

export function TagList({ label, items }: tag_list) {
  return (
    <>
      {items.length > 0 ? (
        <p className='font-semibold '>
          {label}:
          {items?.map((el, i) => (
            <span key={el} className='font-normal text-gray-300'>
              {el}
              {i < items.length - 1 ? ', ' : ''}
            </span>
          ))}
        </p>
      ) : null}
    </>
  )
}
