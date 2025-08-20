import { useStore } from '@nanostores/preact'
import { idModal, isOpenModal, typeModal } from '../../utils/storage/data-modal'
import ModalAnimeInfo from './ModalAnimeInfo'
import ModalMangaInfo from './ModalMangaInfo'
import ArrowLeftIcon from '../icons/ArrowLeftIcon'

const ModalContent = () => {
  const isOpen = useStore(isOpenModal)
  const id = useStore(idModal)
  const type = useStore(typeModal)
  console.log(type)

  const closeModal = () => {
    const $home = document.querySelector('.home')
    $home?.classList.remove('home-hidden')
  }

  document.addEventListener('mouseup', (ev) => {
    if (ev.button === 3) {
      isOpenModal.set(false)
      closeModal()
    }
  })
  const handlerClickClose = () => {
    isOpenModal.set(false)
    idModal.set(0)
    closeModal()
  }
  const bgCustom = 'https://i.pinimg.com/originals/62/c4/c8/62c4c8894109a2db88fe82a5fe8c41aa.png'
  if (isOpen) {
    return (
      <article className='fixed top-0 left-0 w-full h-full z-20 bg-cover overflow-auto modal' style={{ gridArea: 'modal', backgroundImage: `url(${bgCustom})` }}>
        <header className='pt-4 pl-4'>
          <button className='text-white text-2xl font-bold  cursor-pointer' onClick={handlerClickClose}>
            <ArrowLeftIcon theClass='active:scale-95 hover:scale-110 hover:text-primary' />
          </button>
        </header>
        {type === 'anime' ? <ModalAnimeInfo key={id} id={id} type={type} /> : type === 'manga' ? <ModalMangaInfo key={id} id={id} /> : null}
      </article>
    )
  }
}

export default ModalContent
