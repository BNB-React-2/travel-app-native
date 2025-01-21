import { axios } from '@/lib/axios';
import { DestinationType } from './destinations.types';

export function getDestinations() {
  return axios.get<DestinationType[]>('/destinations').then((res) => res.data);
}

export function getDestinationByID(id: number) {
  return axios
    .get<DestinationType>(`/destinations/${id}`)
    .then((res) => res.data);
}

export function changeFavoriteDestination(
  itemId: DestinationType['id'],
  newFavorite: boolean
) {
  return axios
    .patch<DestinationType>(`/destinations/${itemId}`, {
      isFavorite: newFavorite,
    })
    .then((res) => res.data);
}
