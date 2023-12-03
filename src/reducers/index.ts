import { combineReducers } from 'redux';
import { vehicles } from './vehicles.reducer';

export const rootReducer = combineReducers({
  vehicles,
});
