import { useStore } from '@nanostores/preact'
import { idModal, isOpenModal, typeModal } from '../../utils/storage/data-modal'

import MangaModal from './MangaModal'
import ArrowLeftIcon from '../icons/ArrowLeftIcon'
import ArrowTopIcon from '../icons/ArrowTopIcon'
import HomeIcon from '../icons/HomeIcon'
import AnimeModal from './AnimeModal'
import useModalInteraction from '../../utils/hooks/useModalInteraction'

const ModalContent = () => {
  const isOpen = useStore(isOpenModal)
  const id = useStore(idModal)
  const type = useStore(typeModal)
  const { closeModal } = useModalInteraction()

  document.addEventListener('mouseup', (ev) => {
    if (ev.button === 3) closeModal()
  })

  const handlerClickMoveTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  const $buttonTop = document.querySelector('.button-top')
  const scrollUmbral = 50

  document.addEventListener('scroll', (ev) => {
    if (window.scrollY > scrollUmbral) $buttonTop?.classList.remove('hidden-button')
    else $buttonTop?.classList.add('hidden-button')
  })

  if (isOpen) {
    return (
      <main className=' h-full w-full bg-cover overflow-auto modal home-hidden'>
        <header className='flex items-center font-bold px-4 py-2'>
          <button className='text-white flex items-center font-bold  cursor-pointer' onClick={closeModal}>
            <ArrowLeftIcon theClass='active:scale-95 hover:scale-110 hover:text-primary ' />
          </button>
        </header>
        {type === 'anime' ? <AnimeModal key={id} id={id} /> : null}
        {type == 'manga' ? <MangaModal key={id} id={id} /> : null}
        <button className='fixed bottom-20 right-5 z-10 rounded-full p-2 bg-primary text-black cursor-pointer shadow shadow-black' onClick={closeModal}>
          <HomeIcon />
        </button>
        <button className='fixed bottom-5 right-5 z-10 rounded-full p-2 bg-primary text-black cursor-pointer shadow shadow-black hidden-button button-top' onClick={handlerClickMoveTop}>
          <ArrowTopIcon />
        </button>
      </main>
    )
  }
}

export default ModalContent
