import { useStore } from '@nanostores/preact'
import { wikiTitles } from '../../../utils/storage/storage-wiki'

const TitleVariants = () => {
  const { title, alternativeTitles } = useStore(wikiTitles)
  const filteredAlternativeTitles = alternativeTitles?.filter((el) => el.trim() != title)

  return (
    <section className='flex flex-col gap-2 '>
      <h2 className='font-basicaline font-semibold text-2xl tracking-wide'>{title}</h2>
      <div className='font-basicaline tracking-wide'>
        {filteredAlternativeTitles?.map((el) => (
          <span>{el != filteredAlternativeTitles.at(-1) ? `${el}, ` : el}</span>
        ))}
      </div>
    </section>
  )
}

export default TitleVariants
