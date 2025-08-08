import { useStore } from '@nanostores/preact'
import { idModal, isOpenModal } from '../../utils/storage/data-modal'
import ModalAnime from './ModalAnime'

const ModalContent = () => {
  const isOpen = useStore(isOpenModal)
  const id = useStore(idModal)

  document.addEventListener('mouseup', (ev) => {
    if (ev.button === 3) isOpenModal.set(false)
  })
  const handlerClickClose = () => {
    isOpenModal.set(false)
    idModal.set(0)
  }

  if (isOpen) {
    return (
      <article className='fixed top-0 left-0 w-full h-full z-20 bg-gray-800 overflow-auto modal' style={{ gridArea: 'modal', scrollBehavior: '' }}>
        <header className='p-4'>
          <section>
            <button className='text-white text-2xl font-bold' onClick={handlerClickClose}>
              Close
            </button>
          </section>
        </header>
        <ModalAnime key={id} id={id} />
      </article>
    )
  }
}

export default ModalContent
