import type { JSX } from 'preact/jsx-runtime'

type navigation_button = {
  text: string | JSX.Element
  onClick: () => void
  isDisabled: boolean
}

const NavigationButton = ({ text, isDisabled, onClick }: navigation_button) => {
  return (
    <button
      className={`px-6  rounded text-lg font-basicaline text-black shadow-xl shadow-black  ${
        isDisabled ? 'bg-gray-800 text-gray-400 cursor-not-allowed' : 'bg-primary cursor-pointer hover:scale-105 active:scale-95'
      }`}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default NavigationButton
