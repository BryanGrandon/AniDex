import { useStore } from '@nanostores/preact'
import { contentModal, isOpenModal } from '../../utils/storage/data-modal'

const Modal = () => {
  const isOpen = useStore(isOpenModal)
  const content = useStore(contentModal)
  if (isOpen) {
    return (
      <article className='absolute top-0 left-0 w-full h-full z-10 bg-primary' style={{ gridArea: 'modal' }}>
        <h2>Modal</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis at deleniti modi rerum sequi aliquam nesciunt nostrum quos. Autem exercitationem perspiciatis adipisci, quam fugiat nam
          dicta aperiam minus incidunt esse!
        </p>
        <p>///-- {content} --///</p>
      </article>
    )
  }
}

export default Modal
