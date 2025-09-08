import ArrowTopIcon from '../../core/icons/ArrowTopIcon'
import HomeIcon from '../../core/icons/HomeIcon'

const FloatingPanel = () => {
  const $buttonTop = document.querySelector('.button-top')
  const scrollUmbral = 50

  document.addEventListener('scroll', () => {
    if (window.scrollY > scrollUmbral) $buttonTop?.classList.remove('hidden-button')
    else $buttonTop?.classList.add('hidden-button')
  })

  document.addEventListener('mouseup', (ev) => {
    if (ev.button === 3) {
      ev.preventDefault()
      window.location.href = '/'
    }
  })

  const handlerClickMoveTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <div className='fixed bottom-5 right-5 z-10 flex flex-col gap-3'>
      <a href={'/'} className='rounded-full p-2 bg-primary text-black cursor-pointer shadow shadow-black'>
        <HomeIcon />
      </a>
      <button className='z-10 rounded-full p-2 bg-primary text-black cursor-pointer shadow shadow-black hidden-button button-top' onClick={handlerClickMoveTop}>
        <ArrowTopIcon />
      </button>
    </div>
  )
}

export default FloatingPanel
