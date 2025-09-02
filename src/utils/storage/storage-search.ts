import { atom } from 'nanostores'

export const searchQuery = atom('')
export const filter = atom('')

export const searchOptions = atom({
  type: '',
  status: '',
  orderBy: '',
  sort: '',
  sfw: '',
  year: '',
})
