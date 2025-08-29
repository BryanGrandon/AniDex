type select_filter = {
  title?: string
  highlight: string
  array: any[]
  theClassMain?: string
  callbacks: Function
}

const SelectFilter = ({ theClassMain = '', title, array, highlight, callbacks }: select_filter) => {
  const closeDetails = async () => {
    const $details = document.querySelector(`.${theClassMain}`)
    $details?.removeAttribute('open')
  }

  const handlerClick = (ev: string) => {
    callbacks(ev)
    closeDetails()
  }

  return (
    <section className='items-center justify-between gap-4 text-lg grid grid-cols-2'>
      <p>{title}</p>
      <details className={`relative ${theClassMain}`}>
        <summary className='font-basicaline tracking-wide border border-primary px-3 py-0.5 rounded-md '>{highlight}</summary>
        <article className='relative'>
          <section className='absolute top-0 z-10 overflow-auto list-filter rounded-xl flex flex-col gap-2 max-h-89 bg-slate-800 '>
            {array.map((ev) => (
              <p className=' rounded-md hover:bg-slate-700 w-full cursor-pointer text-center px-2 py-1' onClick={() => handlerClick(ev)}>
                {ev}
              </p>
            ))}
          </section>
        </article>
      </details>
    </section>
  )
}

export default SelectFilter
