import { useStore } from '@nanostores/preact'
import { relations } from '../../../utils/storage/storage-wiki'

const Relations = () => {
  const relationsData = useStore(relations)
  const handlerClickRelations = ({ id, type }: { id: number; type: string }) => {
    localStorage.setItem('id', String(id))
    localStorage.setItem('type', String(type))
    window.location.href = `./wiki`
    // create array in local storage for id and type
    // onClick button return select last id, type and delete it after use
  }
  return (
    <>
      {relationsData?.length > 0 ? (
        <section className='gap-1 grid grid-cols-1 test '>
          {relationsData.map((el) => (
            <section className='flex flex-col p-1 px-4 py-2  rounded overflow-hidden'>
              <p className='text-orange-400 relative text-xl font-basicaline tracking-wider'>
                {el.relation}: {el.entry[0].type}
              </p>
              <abbr title={el.entry[0].name} className='no-underline' onClick={() => handlerClickRelations({ id: el.entry[0].mal_id, type: el.entry[0].type })}>
                <h3 className='relative overflow-hidden text-ellipsis whitespace-nowrap cursor-pointer p-2 px-5 hover:text-primary'>{el.entry[0].name}</h3>
              </abbr>
            </section>
          ))}
        </section>
      ) : null}
    </>
  )
}

export default Relations
