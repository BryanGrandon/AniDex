import { getData } from '../api/getData'
import { LIMIT_CONTENT, LIMIT_CONTENT_ASIDE, URL_CS, URL_LEU, URL_TA, URL_TM } from './api'

import type { latest_episodes_updates } from '../api/interfaces/latest-episodes-updates'
import type { default_data } from '../api/interfaces/default-data'
import type { most_popular_manga } from '../api/interfaces/most-popular-manga'
import { getDataUrl } from '../api/getDataUrl'
import { URL_MOST_POPULAR_ANIME, URL_MOST_POPULAR_MANGA } from './urls'

// const PAGE = 1

// const currentSeason: default_data = await getData({
//   url: URL_CS,
//   page: PAGE,
//   limit: LIMIT_CONTENT,
// })

// const latestEpisodesUpdates: latest_episodes_updates = await getData({
//   url: URL_LEU,
//   page: PAGE,
//   limit: LIMIT_CONTENT,
// })

// const topUpcomingAnime: default_data = await getData({
//   url: URL_TA,
//   page: PAGE,
//   limit: LIMIT_CONTENT,
//   more: 'filter=upcoming',
// })

// const dataIndex = {
//   currentSeason,
//   latestEpisodesUpdates,
//   topUpcomingAnime,
// }

// export { dataIndex }
