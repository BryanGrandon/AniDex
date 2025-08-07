import { useStore } from '@nanostores/preact'
import { idModal, isOpenModal } from '../../utils/storage/data-modal'
import ModalAnime from './ModalAnime'

const Modal = () => {
  const isOpen = useStore(isOpenModal)
  const id = useStore(idModal)

  document.addEventListener('mouseup', (ev) => {
    if (ev.button === 3) {
      isOpenModal.set(false) // Close the modal on left mouse button click
    }
  })

  if (isOpen) {
    return (
      <article className='fixed top-0 left-0 w-full h-full z-10 bg-primary' style={{ gridArea: 'modal' }}>
        <ModalAnime key={id} id={id} />
      </article>
    )
  }
}

export default Modal
