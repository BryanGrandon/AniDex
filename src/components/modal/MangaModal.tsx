import ModalList from './ModalList'
import MiniCard from '../ui/MiniCard'

import ModalInfo from './ModalInfo'
import useFetchModal from '../../utils/hooks/useFetchModal'
import useDataMangaModal from '../../utils/hooks/useDataMangaModal'
import useModalInteraction from '../../utils/hooks/useModalInteraction'

type Props = {
  id: number
}
const MangaModal = ({ id }: Props) => {
  const { data, recommendations } = useFetchModal(id)
  const { title, image, synopsis, background, primaryList, secondaryList, relations } = useDataMangaModal(data)
  const { openModal } = useModalInteraction()

  return (
    <main className='px-4 pb-4 max-w-[1400px] m-auto flex flex-col gap-4'>
      <article className='overlay glassmorphism rounded-xl overflow-hidden p-4'>
        <article className=' flex flex-col items-center md:flex-row md:items-start gap-4 relative'>
          <article>
            <img src={image} alt={title + '-img'} className='rounded w-75' />
            <p>{id}</p>
          </article>

          <article className='pt-4 flex flex-col justify-start w-full'>
            <h2 className='text-3xl font-basicaline border-b-2 border-primary mb-4'>{title}</h2>
            <section className='flex flex-col gap-1'>
              <ModalList items={primaryList} />
            </section>
          </article>
        </article>
      </article>

      <article className='grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
        <ModalInfo title='Synopsis' moreClass='md:col-span-2 lg:col-span-3' children={String(synopsis)} />

        <ModalInfo title='More info'>
          <section className='px-4'>
            <ModalList items={secondaryList} />
          </section>
        </ModalInfo>
      </article>

      {background ? <ModalInfo title='Background' children={String(background)} /> : null}

      {relations.length > 0 ? (
        <section className='gap-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
          {relations.map((el) => (
            <section className='flex flex-col p-1 px-4 py-2  rounded overlay glassmorphism overflow-hidden'>
              <p className='text-orange-400 relative text-xl font-basicaline tracking-wider'>
                {el.relation}: {el.entry[0].type}
              </p>
              <abbr title={el.entry[0].name} className='no-underline' onClick={() => openModal({ id: el.entry[0].mal_id, type: el.entry[0].type })}>
                <h3 className='relative overflow-hidden text-ellipsis whitespace-nowrap cursor-pointer p-2 hover:text-primary'>{el.entry[0].name}</h3>
              </abbr>
            </section>
          ))}
        </section>
      ) : null}

      {recommendations?.length > 0 ? (
        <section className='p-4 rounded-xl flex flex-col gap-4 overflow-hidden overlay glassmorphism'>
          <h2 className='font-basicaline text-2xl relative'>Recommendations</h2>
          <article class='relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {recommendations?.map((data) => (
              <MiniCard image={data.entry.images.webp.large_image_url} title={data.entry.title} text={`id: ${data.entry.mal_id}`} id={data.entry.mal_id} type={'manga'} />
            ))}
          </article>
        </section>
      ) : null}
    </main>
  )
}

export default MangaModal
