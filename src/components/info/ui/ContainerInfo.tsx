import type { JSX } from 'preact/jsx-runtime'

type container_info = {
  title: string
  children: JSX.Element | string
  moreClass?: string
}

const ContainerInfo = ({ title, children, moreClass }: container_info): JSX.Element => {
  return (
    <article className={`overlay p-4 rounded-xl overflow-hidden glassmorphism ${moreClass}`}>
      <section className='relative flex flex-col gap-2'>
        <h2 className='text-2xl font-basicaline'>{title}</h2>
        {typeof children == 'string' ? <p className='px-4 w-full max-h-45 overflow-auto text-white'>{children}</p> : children}
      </section>
    </article>
  )
}

export default ContainerInfo
