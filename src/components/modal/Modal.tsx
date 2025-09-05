import { useStore } from '@nanostores/preact'
import { idModal, isOpenModal, typeModal } from '../../utils/storage/data-modal'

import MangaModal from './MangaModal'
import AnimeModal from './AnimeModal'
import ArrowLeftIcon from '../core/icons/ArrowLeftIcon'
import FloatingPanel from '../core/ui/FloatingPanel'

const ModalContent = () => {
  const isOpen = useStore(isOpenModal)
  const id = useStore(idModal)
  const type = useStore(typeModal)
  const handlerClick = () => {}

  document.addEventListener('mouseup', (ev) => {
    if (ev.button === 3) {
      ev.preventDefault()
      handlerClick
    }
  })
  if (isOpen) {
    return (
      <main className=' h-full w-full bg-cover overflow-auto modal home-hidden'>
        <header className='flex items-center font-bold px-4 py-2'>
          <button className='text-white flex items-center font-bold  cursor-pointer' onClick={handlerClick}>
            <ArrowLeftIcon theClass='active:scale-95 hover:scale-110 hover:text-primary ' />
          </button>
        </header>

        <FloatingPanel callback={handlerClick} />
      </main>
    )
  }
}

export default ModalContent
