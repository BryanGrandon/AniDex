type icons = {
  theClass?: string
}

const ArrowLeftIcon = ({ theClass = '' }: icons) => {
  return (
    <svg height='3rem' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' className={theClass}>
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M15 6l-6 6l6 6' />
    </svg>
  )
}

export default ArrowLeftIcon
