type wiki_paragraph = {
  title: string
  paragraph: string
}

const WikiParagraph = ({ title, paragraph }: wiki_paragraph) => {
  return (
    <section>
      <h3 className='text-xl font-basicaline'>{title}</h3>
      <p class='prose text-lg dark:prose-invert'>{paragraph}</p>
    </section>
  )
}

export default WikiParagraph
