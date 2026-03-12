import { useStore } from '@nanostores/preact'
import { wikiMainContent } from '../../../utils/storage/storage-wiki'
import { InfoItem } from '../ui/InfoItem'
import Title from '../../core/ui/Title'

const MainContent = () => {
  const { allTitles, details, story, relations } = useStore(wikiMainContent)

  const filteredAlternativeTitles = allTitles.alternativeTitles?.filter((el) => el.trim() != allTitles.title)
  const allStory = story.filter((detail) => detail.value.length > 0)

  const handlerClickRelations = ({ id, type }: { id: number; type: string }) => {
    localStorage.setItem('id', String(id))
    localStorage.setItem('type', String(type))
    window.location.href = `./wiki`
    // create array in local storage for id and type
    // onClick button return select last id, type and delete it after use
  }

  return (
    <article>
      <section className='flex flex-col gap-2'>
        <h2 className=' font-semibold text-2xl'>{allTitles.title}</h2>
        <div className='font-basicaline tracking-wide'>
          {filteredAlternativeTitles?.map((el) => (
            <span>{el != filteredAlternativeTitles.at(-1) ? `${el}, ` : el}</span>
          ))}
        </div>
      </section>

      <section className='flex flex-wrap gap-4 my-4'>
        {details.map((item) => (
          <InfoItem key={item.label} label={item.label} value={item.value ? item.value : 'N/A'} />
        ))}
      </section>

      <section className='flex flex-col gap-4'>
        {allStory.map((detail) => (
          <section key={detail.label} className='mb-4 flex flex-col gap-2'>
            <Title text={detail.label} />
            <p className='text-gray-300 overflow-auto pr-1'>{detail.value}</p>
          </section>
        ))}
      </section>

      <section className='flex flex-col gap-4'>
        <Title text='Relations' />
        {relations?.length > 0 ? (
          <section className='flex flex-wrap gap-4'>
            {relations.map((el) => (
              <section className='flex flex-col p-2 rounded overflow-hidden test'>
                <p className='text-gray-400 relative text-xl font-basicaline tracking-wider'>
                  {el.relation}: {el.entry[0].type}
                </p>
                <abbr title={el.entry[0].name} className='no-underline' onClick={() => handlerClickRelations({ id: el.entry[0].mal_id, type: el.entry[0].type })}>
                  <h3 className='relative overflow-hidden text-ellipsis whitespace-nowrap cursor-pointer hover:text-primary'>{el.entry[0].name}</h3>
                </abbr>
              </section>
            ))}
          </section>
        ) : null}
      </section>
    </article>
  )
}

export default MainContent
