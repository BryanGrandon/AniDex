import ArrowLeftIcon from '../../core/icons/ArrowLeftIcon'

const BackButton = () => {
  return (
    <button onClick={() => window.history.back()} class='text-white flex items-center font-bold cursor-pointer'>
      <ArrowLeftIcon theClass='active:scale-95 hover:scale-110 hover:text-primary ' />
    </button>
  )
}

export default BackButton
