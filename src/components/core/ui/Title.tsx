type title = {
  text: string
}

const Title = ({ text }: title) => {
  return <h2 className='font-basicaline text-2xl relative'>{text}</h2>
}

export default Title
