import { useStore } from '@nanostores/preact'
import { searchApproach } from '../../../utils/storage/storage-search'
import Filter from './Filter'

const AllFilters = () => {
  const type = useStore(searchApproach)

  return <Filter />
}

export default AllFilters
