import { getData } from '../api/getData'
import { LIMIT_CONTENT, LIMIT_CONTENT_ASIDE, URL_CS, URL_LEU, URL_TA } from './api'

import type { current_season } from '../api/interfaces/current-season'
import type { latest_episodes_updates } from '../api/interfaces/latest-episodes-updates'
import type { top_airing_anime } from '../api/interfaces/top-airing-anime'
import type { top_upcoming_anime } from '../api/interfaces/top-upcoming-anime'

const page = 1

const currentSeason: current_season = await getData({
  url: URL_CS,
  page: page,
  limit: LIMIT_CONTENT,
})

const latestEpisodesUpdates: latest_episodes_updates = await getData({
  url: URL_LEU,
  page: page,
  limit: LIMIT_CONTENT,
})

const topUpcomingAnime: top_upcoming_anime = await getData({
  url: URL_TA,
  page: page,
  limit: LIMIT_CONTENT,
  more: 'filter=upcoming',
})

// Aside

const topAiringAnime: top_airing_anime = await getData({
  url: URL_TA,
  page: page,
  limit: LIMIT_CONTENT_ASIDE,
  more: 'filter=airing',
})

const mostPopularAnime: top_airing_anime = await getData({
  url: URL_TA,
  page: page,
  limit: LIMIT_CONTENT_ASIDE,
  more: 'filter=bypopularity',
})

const dataIndex = {
  currentSeason,
  latestEpisodesUpdates,
  topUpcomingAnime,
  topAiringAnime: topAiringAnime.data,
  mostPopularAnime: mostPopularAnime.data,
}

export { dataIndex }
