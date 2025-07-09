import data from '../data.json'
import { useState } from 'preact/hooks'

const Navbar = () => {
  const { links } = data.header

  const [styleList, setStyleList] = useState({ display: 'none' })

  const handlerClick = () => {
    if (styleList.display === 'none') setStyleList({ display: 'flex' })
    else setStyleList({ display: 'none' })
  }

  return (
    <nav className='relative'>
      <section className='flex justify-between items-center text-white relative py-2 text-xl font-basicaline'>
        <a href='#'>Logo</a>

        <button onClick={handlerClick} className='navbar__button'>
          {styleList.display == 'none' ? (
            <svg height='1.6rem' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2'>
              <path stroke='none' d='M0 0h24v24H0z' fill='none' />
              <path d='M4 6l16 0' />
              <path d='M4 12l16 0' />
              <path d='M4 18l16 0' />
            </svg>
          ) : (
            <svg xmlns='http://www.w3.org/2000/svg' height='1.5rem' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2'>
              <path stroke='none' d='M0 0h24v24H0z' fill='none' />
              <path d='M18 6l-12 12' />
              <path d='M6 6l12 12' />
            </svg>
          )}
        </button>

        <section className='flex space-evenly gap-6 navbar '>
          {links.map((link) => (
            <a href={link.href} className=' hover:text-primary tracking-wide'>
              {link.title}
            </a>
          ))}
        </section>
      </section>
      <section className='flex flex-col items-center justify-center absolute gap-4 p-4 text-xl w-full rounded-2xl font-basicaline glassmorphism' style={styleList}>
        {links.map((link) => (
          <a href={link.href} onClick={() => setStyleList({ display: 'none' })} className='w-full text-center hover:text-primary hover:scale-110 active:scale-95'>
            {link.title}
          </a>
        ))}
      </section>
    </nav>
  )
}
export default Navbar
