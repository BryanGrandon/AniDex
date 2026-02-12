import { WIKI } from '../constants/location'
import { typeOfMedia, mediaId } from '../storage/media-storage'

const useMedia = () => {
  type handle_media_select = {
    id: number
    type: string
  }

  const handleMediaSelect = ({ id, type }: handle_media_select) => {
    localStorage.setItem('id', String(id)) // remove this when using nanostores
    mediaId.set(id)
    typeOfMedia.set(type)
    window.location.href = WIKI
  }

  return { handleMediaSelect }
}

export default useMedia
