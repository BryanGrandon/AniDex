type InfoItemProps = {
  label: string
  value: string | number | string[]
}

export function InfoItem({ label, value }: InfoItemProps) {
  return (
    <p className='font-semibold'>
      {label}: <span className='text-gray-300'>{value}</span>
    </p>
  )
}
