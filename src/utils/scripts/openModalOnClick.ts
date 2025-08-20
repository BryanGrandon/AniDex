import { idModal, isOpenModal, typeModal } from '../storage/data-modal'

type open_modal_on_click = {
  id: number
  type: string
}

const openModalOnClick = ({ id, type }: open_modal_on_click) => {
  const $home = document.querySelector('.home')
  $home?.classList.add('home-hidden')
  idModal.set(id)
  typeModal.set(type)
  isOpenModal.set(true)
}

export default openModalOnClick
