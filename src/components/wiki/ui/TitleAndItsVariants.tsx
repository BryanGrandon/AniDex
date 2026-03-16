import { useStore } from '@nanostores/preact'
import { wikiMainContent } from '../../../utils/storage/storage-wiki'

const TitleAndItsVariants = ({ moreClass = '' }: { moreClass?: string }) => {
  const { allTitles } = useStore(wikiMainContent)
  const filteredAlternativeTitles = allTitles.alternativeTitles?.filter((el) => el.trim() != allTitles.title)

  return (
    <section className={`flex flex-col gap-2 ${moreClass}`}>
      <h2 className=' font-semibold text-2xl'>{allTitles.title}</h2>
      <div className='font-basicaline tracking-wide'>
        {filteredAlternativeTitles?.map((el) => (
          <span>{el != filteredAlternativeTitles.at(-1) ? `${el}, ` : el}</span>
        ))}
      </div>
    </section>
  )
}

export default TitleAndItsVariants
