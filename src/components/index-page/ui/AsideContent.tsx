import type { JSX } from 'preact/jsx-runtime'

type aside_content = {
  title: string
  children: JSX.Element[]
}

const AsideContent = ({ title, children }: aside_content) => {
  return (
    <article class='flex flex-col gap-4'>
      <h3 className='font-basicaline text-2xl'>{title}</h3>
      <section className='flex flex-col gap-2'>{children}</section>
    </article>
  )
}

export default AsideContent
