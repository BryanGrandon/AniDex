import { atom } from 'nanostores'

type wiki_card = {
  type: string
  image: string
  status: string
}

export const wikiCard = atom<wiki_card>({
  type: '',
  image: '',
  status: '',
})
