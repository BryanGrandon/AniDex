import { atom } from 'nanostores'

export const searchApproach = atom('anime')
export const searchPage = atom(1)
export const searchQuery = atom('')
export const search = atom(`https://api.jikan.moe/v4/${searchApproach.get()}?page=${searchPage.get()}&limit=24`)

// Filter option highlight
export const mediaTypeSelected = atom('')
export const mediaStatusSelected = atom('')
export const orderFieldSelected = atom('')
export const sortDirectionSelected = atom('')
export const safeModeSelected = atom('')
export const releaseYearSelected = atom('')
