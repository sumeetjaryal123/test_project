import {putActions} from '../actionWrapper';

const LOADING = putActions('LOADING');
const FETCH_ANIMALS = putActions('FETCH_ANIMALS');

export {LOADING, FETCH_ANIMALS};

export function fetchAnimals(payload) {
  return {type: FETCH_ANIMALS.REQUEST, payload: payload};
}

export function loading(payload) {
  return {type: LOADING.REQUEST, payload: payload};
}
