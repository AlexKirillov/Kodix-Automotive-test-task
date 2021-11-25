import { combineReducers } from 'redux';
import carslistReducer from './carslistReducer';

const rootReducer = combineReducers({
  carslist: carslistReducer,
})

export default rootReducer
