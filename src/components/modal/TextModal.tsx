type text_modal = {
  textMain: string
  textSecondary?: string
  highlight?: boolean
}

const TextModal = ({ textMain, textSecondary }: text_modal) => {
  return (
    <p className={'font-basicaline font-medium capitalize tracking-wider text-lg text-orange-400'}>
      {textMain} <span className='text-base text-white font-normal'>{textSecondary}</span>
    </p>
  )
}

export default TextModal
