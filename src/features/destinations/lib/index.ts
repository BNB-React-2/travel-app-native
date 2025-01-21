import { match } from '@/lib/regex';
import { DestinationType } from '../destinations.types';

export function matchSearchDestinations(
  destinations: DestinationType[],
  search: string | undefined
) {
  if (search && search !== '') {
    return destinations.filter((d) => match(search, d.title));
  } else return destinations;
}

export function matchCategoryDestinations(
  destinations: DestinationType[],
  categoryId: number | null
) {
  if (categoryId !== null) {
    return destinations.filter((d) => d.categories.includes(categoryId));
  } else return destinations;
}

export function matchTagDestinations(
  destinations: DestinationType[],
  tagId: number | null
) {
  if (tagId === 0) return destinations;
  if (tagId !== null) {
    return destinations.filter((d) => d.tags.includes(tagId));
  } else return destinations;
}
