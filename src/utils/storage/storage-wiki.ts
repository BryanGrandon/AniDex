import { atom } from 'nanostores'

type wiki_content_card = {
  type: string
  image: string
  status: string
}

export const wikiContentCard = atom<wiki_content_card>({
  type: '',
  image: '',
  status: '',
})

type wiki_titles = {
  title: string
  alternativeTitles: string[]
}

export const wikiTitles = atom<wiki_titles>({
  title: '',
  alternativeTitles: [],
})
