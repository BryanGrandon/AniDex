type text_modal = {
  textMain: string
  textSecondary?: string
  highlight?: boolean
}

const TextModal = ({ textMain, textSecondary, highlight = false }: text_modal) => {
  return (
    <p className='font-basicaline font-medium capitalize tracking-wider text-white text-lg'>
      {textMain} {highlight ? <span className='text-primary text-base font-normal'>{textSecondary}</span> : <span className='text-base font-normal'>{textSecondary}</span>}
    </p>
  )
}

export default TextModal
