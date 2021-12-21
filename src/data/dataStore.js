export const settings = {

  faq: {
    titleText: 'FAQ',
    image: 'https://www.solojuve.com/media/com_easysocial/photos/166/306/364041db7f04bc4f2d1ba90e055e3518_thumbnail.jpg',
    text: 'chylące się ku upadkowi pod wpływem wiatrów wojny i niepokojów szalejących na jego ziemiach. Przeżyj wydarzenia, które ukształtowały oryginalną fabułę z gier serii Gothic i zobacz na własne oczy, jak powstanie Kolonii Górniczej wpłynęło na życie ludzi z dala od kontynentu. Pozostaw po sobie ślad w brutalnym świecie, w którym każda twoja decyzja ma wyraźny wpływ na otoczenie i życie tych, których spotykasz na swojej drodze.',
  },

  info: {
    titletext: 'info',
    image: 'https://images.igdb.com/igdb/image/upload/t_original/czakchenhdwrawuzl6w3.jpg',
    text: 'Main goal of this project is to honour one the best classic cRPG and take the die-hard fans of the original Gothic trilogy as well as new players on one more adventure in the Kingdom of Myrtana.',
  },

  columnCreatorText: 'Add new column',
  cardCreatorText: 'Add new card',
  creator: {
    buttonOK: 'OK',
    buttonCancel: 'Cancel',
    defaultText: 'Add new item',
  },
  search: {
    defaultText: 'Search...',
    icon: 'search',
  },
  defaultListDescription: '<p>I can do all the things!!!</p>',
  defaultColumnIcon: 'list-alt',
};

export const pageContents = {
  title: 'My first React app',
  subtitle: 'A simple to-do app, with lists, columns and cards',
};

export const listData = {
  title: 'Things to do <sup>soon!</sup>',
  description: 'Interesting things I want to check out!',
  image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  columns: [
    {
      key: 0,
      title: 'Books',
      icon: 'book',
      cards: [
        {
          key: 0,
          title: 'This Is Going to Hurt',
        },
        {
          key: 1,
          title: 'Interpreter of Maladies',
        },
      ],
    },
    {
      key: 1,
      title: 'Movies',
      icon: 'film',
      cards: [
        {
          key: 0,
          title: 'Harry Potter',
        },
        {
          key: 1,
          title: 'Star Wars',
        },
      ],
    },
    {
      key: 2,
      title: 'Games',
      icon: 'gamepad',
      cards: [
        {
          key: 0,
          title: 'The Witcher',
        },
        {
          key: 1,
          title: 'Skyrim',
        },
      ],
    },
  ],
};

const lists = [
  {
    id: 'list-1',
    title: 'Things to do <sup>soon!</sup>',
    description: 'Interesting things I want to check out!',
    image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  },
  {
    id: 'list-2',
    title: 'Waiting for update signal from WDS... <sup>soon!</sup>',
    description: 'Zmiany w komponencie Home',
    image: 'https://i1.sndcdn.com/avatars-000770743657-vl9sac-t500x500.jpg',
  },
  {
    id: 'list-3',
    title: 'Waiting for update signal from WDS... <sup>soon!</sup>',
    description: 'Zmiany w komponencie Home',
    image: 'https://www.wykop.pl/cdn/c3201142/comment_HDi1OMnDGQuFSqekcEpQg4OrlVwxBNgF,w1200h627f.jpg',
  },
];

const columns = [
  {
    id: 'column-1',
    listId: 'list-1',
    title: 'Books',
    icon: 'book',
  },
  {
    id: 'column-2',
    listId: 'list-1',
    title: 'Movies',
    icon: 'film',
  },
  {
    id: 'column-3',
    listId: 'list-1',
    title: 'Games',
    icon: 'gamepad',
  },
  {
    id: 'column-4',
    listId: 'list-2',
    title: 'Strange column',
    icon: 'question',
  },
];

const cards = [
  {
    id: 'card-1',
    columnId: 'column-1',
    title: 'This Is Going to Hurt',
  },
  {
    id: 'card-2',
    columnId: 'column-1',
    title: 'Interpreter of Maladies',
  },
  {
    id: 'card-3',
    columnId: 'column-2',
    title: 'Harry Potter',
  },
  {
    id: 'card-4',
    columnId: 'column-2',
    title: 'Star Wars',
  },
  {
    id: 'card-5',
    columnId: 'column-3',
    title: 'The Witcher',
  },
  {
    id: 'card-6',
    columnId: 'column-3',
    title: 'Skyrim',
  },
];

const initialStoreData = {
  app: {...pageContents},
  lists: [...lists],
  columns: [...columns],
  cards: [...cards],
};

export default initialStoreData;
