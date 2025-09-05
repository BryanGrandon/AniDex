type Props = {
  onClick: any
  theClass?: string
}
const BarsToCloseIcon = ({ onClick, theClass }: Props) => {
  return (
    <div className={`container__icon ${theClass}`} onClick={onClick}>
      <div className='barsToCloseIcon'></div>
    </div>
  )
}

export default BarsToCloseIcon
