import { CategoryType, TagType } from '@/features/categories/categories.types';

export const IMAGE_SOURCES = [
  {
    id: 0,
    source: require('../assets/images/hotel.png'),
  },
  {
    id: 1,
    source: require('../assets/images/island.png'),
  },
  {
    id: 2,
    source: require('../assets/images/camp.png'),
  },
  {
    id: 3,
    source: require('../assets/images/forest.png'),
  },
  {
    id: 4,
    source: require('../assets/images/ocean.png'),
  },
  {
    id: 5,
    source: require('../assets/images/sunset.png'),
  },
  {
    id: 6,
    source: require('../assets/images/hiking.png'),
  },
  {
    id: 7,
    source: require('../assets/images/beach.png'),
  },
  {
    id: 8,
    source: require('../assets/images/mountain.png'),
  },
];

export const TAG_DATA: TagType[] = [
  {
    id: 0,
    title: 'Tudo',
  },
  {
    id: 1,
    title: 'Popular',
  },
  {
    id: 2,
    title: 'Recomendado',
  },
  {
    id: 3,
    title: 'Mais',
  },
];

export const CATEGORIES_DATA: CategoryType[] = [
  {
    title: 'Ocean',
    imageId: 4,
  },
  {
    title: 'Mountain',
    imageId: 8,
  },
  {
    title: 'Camp',
    imageId: 2,
  },
  {
    title: 'Sunset',
    imageId: 5,
  },
  {
    title: 'Hiking',
    imageId: 6,
  },
  {
    title: 'Beach',
    imageId: 7,
  },
  {
    title: 'Forest',
    imageId: 3,
  },
];
