import { useEffect } from 'preact/hooks'
import { clickHamburgerMenu } from '../../../utils/function/clickHamburgerMenu'

const HamburgerMenuAnimation = () => {
  useEffect(() => {
    const McButton = document.querySelector('[data-hamburger-menu]') as HTMLElement
    McButton.addEventListener('click', clickHamburgerMenu)
    return () => McButton.removeEventListener('click', clickHamburgerMenu)
  }, [])

  return (
    <a data-hamburger-menu className='relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-4 cursor-pointer flex flex-col justify-between'>
      <b className='absolute left-0 w-full h-0.5 bg-black dark:bg-white top-0'></b>
      <b className='absolute left-0 w-full h-0.5 bg-black dark:bg-white top-1/2'></b>
      <b className='absolute left-0 w-full h-0.5 bg-black dark:bg-white top-full'></b>
    </a>
  )
}

export default HamburgerMenuAnimation
