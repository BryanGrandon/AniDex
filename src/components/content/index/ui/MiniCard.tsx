type mini_card = {
  image: string
  title: string
  text: string
  highlight: string
}

const MiniCard = ({ image, title, text, highlight }: mini_card) => {
  return (
    <section class='flex gap-2 rounded-lg  bg-dark relative overflow-hidden glassmorphism'>
      <img src={image} alt='' class='h-21 w-15 object-cover' />
      <section class='flex flex-col justify-between p-1 pr-4 w-full'>
        <p>{title}</p>
        <p class='text-sm text-gray-400'>{text}</p>
        <p class='text-end'>{highlight}</p>
      </section>
    </section>
  )
}

export default MiniCard
