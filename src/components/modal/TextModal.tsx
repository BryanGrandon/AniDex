type text_modal = {
  text: string
  highlight?: string
}

const TextModal = ({ text, highlight }: text_modal) => {
  return (
    <p className='font-basicaline font-medium capitalize tracking-wider'>
      {text} <span className='text-primary'>{highlight}</span>
    </p>
  )
}

export default TextModal
