import {call, put, all, takeEvery} from 'redux-saga/effects';
import {FETCH_ANIMALS} from '../actions';
import {fetchAnimalsService} from '../service';

// animal saga
function* fetchAnimalsSaga(payload) {
  try {
    const response = yield call(fetchAnimalsService);
    // if api return 200 reponse
    if (response && response.status === 200) {
      yield put({
        type: FETCH_ANIMALS.SUCCESS,
        payload: response,
      });
    } else {
      // return the error
      yield put({
        type: FETCH_ANIMALS.FAILED,
        payload: response,
      });
    }
  } catch {}
}

// Sagas
function* publicSaga() {
  yield yield takeEvery(FETCH_ANIMALS.REQUEST, fetchAnimalsSaga);
}

// Root Saga
export default function* rootSaga() {
  yield all([publicSaga()]);
}
