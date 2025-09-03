import { useStore } from '@nanostores/preact'
import { idModal, isOpenModal, typeModal } from '../../utils/storage/data-modal'

import MangaModal from './MangaModal'
import AnimeModal from './AnimeModal'
import ArrowLeftIcon from '../icons/ArrowLeftIcon'
import FloatingPanel from '../ui/FloatingPanel'
import useModal from '../../utils/hooks/useModal'

const ModalContent = () => {
  const isOpen = useStore(isOpenModal)
  const id = useStore(idModal)
  const type = useStore(typeModal)
  const { handlerClick } = useModal({})

  document.addEventListener('mouseup', (ev) => {
    if (ev.button === 3) {
      ev.preventDefault()
      handlerClick.close()
    }
  })
  if (isOpen) {
    return (
      <main className=' h-full w-full bg-cover overflow-auto modal home-hidden'>
        <header className='flex items-center font-bold px-4 py-2'>
          <button className='text-white flex items-center font-bold  cursor-pointer' onClick={handlerClick.close}>
            <ArrowLeftIcon theClass='active:scale-95 hover:scale-110 hover:text-primary ' />
          </button>
        </header>
        {type === 'anime' ? <AnimeModal key={id} id={id} /> : null}
        {type == 'manga' ? <MangaModal key={id} id={id} /> : null}

        <FloatingPanel callback={handlerClick.close} />
      </main>
    )
  }
}

export default ModalContent
