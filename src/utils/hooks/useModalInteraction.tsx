import { idModal, isOpenModal, typeModal } from '../storage/data-modal'

function useModalInteraction() {
  type open_modal_on_click = {
    id: number
    type: string
  }

  const selectElement = () => {
    const $home = document.querySelector('.home')
    const $modal = document.querySelector('.modal')
    return { $home, $modal }
  }

  const openModal = ({ id, type }: open_modal_on_click) => {
    const { $home, $modal } = selectElement()
    $home?.classList.add('home-hidden')
    $modal?.classList.remove('home-hidden')
    idModal.set(id)
    typeModal.set(type)
    isOpenModal.set(true)
  }

  const closeModal = () => {
    const { $home, $modal } = selectElement()
    $home?.classList.remove('home-hidden')
    $modal?.classList.add('home-hidden')
    isOpenModal.set(false)
  }

  return { openModal, closeModal }
}

export default useModalInteraction
