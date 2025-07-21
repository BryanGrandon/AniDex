const LIMIT_CONTENT = 20
const LIMIT_CONTENT_ASIDE = 5
const LIMIT = 20

export { LIMIT_CONTENT, LIMIT_CONTENT_ASIDE, LIMIT }

// API URLs
const URL_API = 'https://api.jikan.moe/v4'
const URL_CS = `${URL_API}/seasons/now` // Current Season
const URL_LEU = `${URL_API}/watch/episodes` // Latest Episodes Updates
const URL_TA = `${URL_API}/top/anime` // Top Anime
const URL_TM = `${URL_API}/top/manga` // Top Manga

export { URL_LEU, URL_TA, URL_CS, URL_TM }

const TYPES_OF_GENRES = {
  genres: [
    {
      title: 'Action',
      amount: 9526,
      id: 1,
    },
    {
      title: 'Adventure',
      amount: 4192,
      id: 2,
    },
    {
      title: 'Avant_Garde',
      amount: 81,
      id: 5,
    },
    {
      title: 'Award_Winning',
      amount: 498,
      id: 46,
    },
    {
      title: 'Boys_Love',
      amount: 10394,
      id: 28,
    },
    {
      title: 'Comedy',
      amount: 14927,
      id: 4,
    },
    {
      title: 'Drama',
      amount: 9997,
      id: 8,
    },
    {
      title: 'Fantasy',
      amount: 12154,
      id: 10,
    },
    {
      title: 'Girls_Love',
      amount: 1769,
      id: 26,
    },
    {
      title: 'Gourmet',
      amount: 492,
      id: 47,
    },
    {
      title: 'Horror',
      amount: 1803,
      id: 14,
    },
    {
      title: 'Mystery',
      amount: 2569,
      id: 7,
    },
    {
      title: 'Romance',
      amount: 17751,
      id: 22,
    },
    {
      title: 'Sci-Fi',
      amount: 3382,
      id: 24,
    },
    {
      title: 'Slice_of_Life',
      amount: 5302,
      id: 36,
    },
    {
      title: 'Sports',
      amount: 1189,
      id: 30,
    },
    {
      title: 'Supernatural',
      amount: 7927,
      id: 37,
    },
    {
      title: 'Suspense',
      amount: 628,
      id: 45,
    },
  ],
  explicit_genres: [
    {
      title: 'Ecchi',
      amount: 3707,
      id: 9,
    },
    {
      title: 'Erotica',
      amount: 9644,
      id: 49,
    },
    {
      title: 'Hentai',
      amount: 11649,
      id: 12,
    },
  ],
  themes: [
    {
      title: 'Adult_Cast',
      amount: 921,
      id: 50,
    },
    {
      title: 'Anthropomorphic',
      amount: 232,
      id: 51,
    },
    {
      title: 'CGDCT',
      amount: 156,
      id: 52,
    },
    {
      title: 'Childcare',
      amount: 215,
      id: 53,
    },
    {
      title: 'Combat_Sports',
      amount: 177,
      id: 54,
    },
    {
      title: 'Crossdressing',
      amount: 643,
      id: 44,
    },
    {
      title: 'Delinquents',
      amount: 181,
      id: 55,
    },
    {
      title: 'Detective',
      amount: 422,
      id: 39,
    },
    {
      title: 'Educational',
      amount: 49,
      id: 56,
    },
    {
      title: 'Gag_Humor',
      amount: 268,
      id: 57,
    },
    {
      title: 'Gore',
      amount: 220,
      id: 58,
    },
    {
      title: 'Harem',
      amount: 2345,
      id: 35,
    },
    {
      title: 'High_Stakes_Game',
      amount: 90,
      id: 59,
    },
    {
      title: 'Historical',
      amount: 2570,
      id: 13,
    },
    {
      title: 'Idols_Female',
      amount: null,
      id: 60,
    },
    {
      title: 'Idols_Male',
      amount: null,
      id: 61,
    },
    {
      title: 'Isekai',
      amount: 1312,
      id: 62,
    },
    {
      title: 'Iyashikei',
      amount: 148,
      id: 63,
    },
    {
      title: 'Love_Polygon',
      amount: 316,
      id: 64,
    },
    {
      title: 'Magical_Sex_Shift',
      amount: 257,
      id: 65,
    },
    {
      title: 'Mahou_Shoujo',
      amount: 160,
      id: 66,
    },
    {
      title: 'Martial_Arts',
      amount: 714,
      id: 17,
    },
    {
      title: 'Mecha',
      amount: 728,
      id: 18,
    },
    {
      title: 'Medical',
      amount: 173,
      id: 67,
    },
    {
      title: 'Memoir',
      amount: 205,
      id: 68,
    },
    {
      title: 'Military',
      amount: 739,
      id: 38,
    },
    {
      title: 'Music',
      amount: 561,
      id: 19,
    },
    {
      title: 'Mythology',
      amount: 837,
      id: 6,
    },
    {
      title: 'Organized_Crime',
      amount: 176,
      id: 69,
    },
    {
      title: 'Otaku_Culture',
      amount: 136,
      id: 70,
    },
    {
      title: 'Parody',
      amount: 352,
      id: 20,
    },
    {
      title: 'Performing_Arts',
      amount: 126,
      id: 71,
    },
    {
      title: 'Pets',
      amount: 163,
      id: 72,
    },
    {
      title: 'Psychological',
      amount: 1640,
      id: 40,
    },
    {
      title: 'Racing',
      amount: 80,
      id: 3,
    },
    {
      title: 'Reincarnation',
      amount: 879,
      id: 73,
    },
    {
      title: 'Reverse_Harem',
      amount: 161,
      id: 74,
    },
    {
      title: 'Romantic_Subtext',
      amount: 355,
      id: 75,
    },
    {
      title: 'Samurai',
      amount: 282,
      id: 21,
    },
    {
      title: 'School',
      amount: 11465,
      id: 23,
    },
    {
      title: 'Showbiz',
      amount: 158,
      id: 76,
    },
    {
      title: 'Space',
      amount: 269,
      id: 29,
    },
    {
      title: 'Strategy_Game',
      amount: 306,
      id: 11,
    },
    {
      title: 'Super_Power',
      amount: 642,
      id: 31,
    },
    {
      title: 'Survival',
      amount: 167,
      id: 77,
    },
    {
      title: 'Team_Sports',
      amount: 442,
      id: 78,
    },
    {
      title: 'Time_Travel',
      amount: 582,
      id: 79,
    },
    {
      title: 'Vampire',
      amount: 545,
      id: 32,
    },
    {
      title: 'Video_Game',
      amount: 327,
      id: 80,
    },
    {
      title: 'Villainess',
      amount: 316,
      id: 81,
    },
    {
      title: 'Visual_Arts',
      amount: 100,
      id: 82,
    },
    {
      title: 'Workplace',
      amount: 510,
      id: 48,
    },
  ],
  demographics: [
    {
      title: 'Josei',
      amount: 4321,
      id: 42,
    },
    {
      title: 'Kids',
      amount: 288,
      id: 15,
    },
    {
      title: 'Seinen',
      amount: 8180,
      id: 41,
    },
    {
      title: 'Shoujo',
      amount: 8421,
      id: 25,
    },
    {
      title: 'Shounen',
      amount: 6751,
      id: 27,
    },
  ],
}

export { TYPES_OF_GENRES }
