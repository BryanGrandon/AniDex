import { useState } from 'preact/hooks'
import data from '../../../data.json'
import HamburgerMenuAnimation from '../ui/HamburgerMenuAnimation'

const Navbar = () => {
  const { links } = data.header
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  return (
    <nav className='relative z-10'>
      <section className='flex justify-between items-center text-white relative py-2 text-xl font-basicaline'>
        <a href='#'>Logo</a>

        <button onClick={() => setIsOpenMenu(!isOpenMenu)} className='flex lg:hidden '>
          <HamburgerMenuAnimation />
        </button>

        <section className='hidden lg:flex space-evenly gap-6'>
          {links.map((link) => (
            <a href={link.href} className=' hover:text-primary tracking-wide'>
              {link.title}
            </a>
          ))}
        </section>
      </section>
      {isOpenMenu ? (
        <section className='absolute right-0 left-0 md:left-auto flex flex-col gap-2 p-2 py-4 md:min-w-60 rounded-xl bg-black/90 border border-primary lg:hidden'>
          {links.map((link) => (
            <a href={link.href} onClick={() => setIsOpenMenu(!isOpenMenu)} className='w-full text-center hover:text-primary hover:scale-110 active:scale-95 p-1'>
              {link.title}
            </a>
          ))}
        </section>
      ) : null}
    </nav>
  )
}
export default Navbar
