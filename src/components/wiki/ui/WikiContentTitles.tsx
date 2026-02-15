type wiki_content_tile = {
  title: string
  alternativeTitles: string[]
}

const WikiContentTitles = ({ title, alternativeTitles }: wiki_content_tile) => {
  const notRepeat = alternativeTitles?.map((el) => (el != title ? el : null))
  const alternative: string[] = notRepeat?.map((el) => (el != notRepeat.at(-1) ? el + ',' : el + ''))

  return (
    <section className='flex flex-col gap-2 '>
      <h2 className='font-basicaline font-semibold text-2xl tracking-wide'>{title}</h2>
      <div className='font-basicaline tracking-wide'>
        {alternative.map((text) => (
          <span>{text}</span>
        ))}
      </div>
    </section>
  )
}

export default WikiContentTitles
