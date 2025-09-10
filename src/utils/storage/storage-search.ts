import { atom } from 'nanostores'

export const searchApproach = atom('anime')
export const searchPage = atom(1)
export const search = atom(`https://api.jikan.moe/v4/${searchApproach.get()}?page=${searchPage.get()}&limit=20`)
