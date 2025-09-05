type Props = {
  object: Object
}

const ObjectList = ({ object }: Props) => {
  const list = Object.entries(object)
  return (
    <>
      {list.map((el) =>
        String(el[1]).length > 0 ? (
          <p>
            <span class='capitalize text-orange-400 font-medium'>{el[0]}</span>: <span>{String(el[1])}</span>
          </p>
        ) : null
      )}
    </>
  )
}

export default ObjectList
