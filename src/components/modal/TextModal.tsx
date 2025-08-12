type text_modal = {
  textMain: string
  textSecondary?: string
  highlight?: boolean
}

const TextModal = ({ textMain, textSecondary, highlight = false }: text_modal) => {
  return (
    <p className='font-basicaline font-medium capitalize tracking-wider'>
      {textMain} {highlight ? <span className='text-primary'>{textSecondary}</span> : <span>{textSecondary}</span>}
    </p>
  )
}

export default TextModal
