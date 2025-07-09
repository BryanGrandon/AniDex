import data from '../data.json'
import BarsToCloseIcon from './icons/BarsToCloseIcon'

const Navbar = () => {
  const { links } = data.header

  const handlerClick = () => {
    const $list = document.querySelector('.navbar__list')
    const $button = document.querySelector('.navbar__button')
    $list?.classList.toggle('d-none')
    $button?.classList.toggle('start-animation-icon')
  }

  return (
    <nav className='relative'>
      <section className='flex justify-between items-center text-white relative py-2 text-xl font-basicaline'>
        <a href='#'>Logo</a>

        <BarsToCloseIcon onClick={handlerClick} theClass='navbar__button' />

        <section className='flex space-evenly gap-6 navbar '>
          {links.map((link) => (
            <a href={link.href} className=' hover:text-primary tracking-wide'>
              {link.title}
            </a>
          ))}
        </section>
      </section>
      <section className='flex flex-col items-center justify-center absolute gap-4 p-4 text-xl w-full rounded-2xl font-basicaline glassmorphism navbar__list d-none'>
        {links.map((link) => (
          <a href={link.href} onClick={handlerClick} className='w-full text-center hover:text-primary hover:scale-110 active:scale-95'>
            {link.title}
          </a>
        ))}
      </section>
    </nav>
  )
}
export default Navbar
