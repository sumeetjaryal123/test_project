import {LOADING, FETCH_ANIMALS} from '../actions';
import {combineReducers} from 'redux';

const initialState = {
  isLoading: false,
  data: [],
};

const homeReducer = (state = initialState, action) => {
  console.log('action', action);
  switch (action.type) {
    case LOADING.SUCCESS:
      return {
        ...state,
        isLoading: action.payload,
      };
    case FETCH_ANIMALS.SUCCESS:
      return {
        ...state,
        data: action.payload.data,
      };
    default:
      return state;
  }
};

const reducers = combineReducers({
  home: homeReducer,
});
export default reducers;
