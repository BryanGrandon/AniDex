import { useStore } from '@nanostores/preact'
import { idModal, isOpenModal, typeModal } from '../../utils/storage/data-modal'
import ModalAnimeInfo from './ModalAnimeInfo'
import ModalMangaInfo from './ModalMangaInfo'
import ArrowLeftIcon from '../icons/ArrowLeftIcon'
import ArrowTopIcon from '../icons/ArrowTopIcon'
import HomeIcon from '../icons/HomeIcon'
import { useEffect } from 'preact/hooks'

const ModalContent = () => {
  const isOpen = useStore(isOpenModal)
  const id = useStore(idModal)
  const type = useStore(typeModal)

  const closeModal = () => {
    const $home = document.querySelector('.home')
    $home?.classList.remove('home-hidden')
  }

  const handlerClickClose = () => {
    isOpenModal.set(false)
    closeModal()
  }

  document.addEventListener('mouseup', (ev) => {
    if (ev.button === 3) handlerClickClose()
  })

  const handlerClickMoveTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  const $buttonTop = document.querySelector('.button-top')
  const scrollUmbral = 50

  window.addEventListener('scroll', () => {
    if (window.scrollY > scrollUmbral) $buttonTop?.classList.remove('hidden-button')
    else $buttonTop?.classList.add('hidden-button')
  })

  const bgCustom = 'https://i.pinimg.com/originals/62/c4/c8/62c4c8894109a2db88fe82a5fe8c41aa.png'
  if (isOpen) {
    return (
      <article className='w-full h-full z-20 bg-cover overflow-auto modal' style={{ gridArea: 'modal', backgroundImage: `url(${bgCustom})` }}>
        <header className='flex items-center font-bold px-4 py-2'>
          <button className='text-white flex items-center font-bold  cursor-pointer' onClick={handlerClickClose}>
            <ArrowLeftIcon theClass='active:scale-95 hover:scale-110 hover:text-primary ' />
          </button>
        </header>
        {type === 'anime' ? <ModalAnimeInfo key={id} id={id} type={type} /> : type === 'manga' ? <ModalMangaInfo key={id} id={id} /> : null}
        <button className='fixed bottom-20 right-5 z-10 rounded-full p-2 bg-primary text-black cursor-pointer shadow shadow-black' onClick={handlerClickClose}>
          <HomeIcon />
        </button>
        <button className='fixed bottom-5 right-5 z-10 rounded-full p-2 bg-primary text-black cursor-pointer shadow shadow-black hidden-button button-top' onClick={handlerClickMoveTop}>
          <ArrowTopIcon />
        </button>
      </article>
    )
  }
}

export default ModalContent
