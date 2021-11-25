import {
  GET_CARSLIST, ADD_CAR, DELETE_CAR,
} from "../types/carslistTypes";

function carslistReducer(state = [], action) {
  const { type, payload } = action;
  switch (type) {
    case GET_CARSLIST:
      return payload;

    case ADD_CAR:
      return [...state, payload];

    case DELETE_CAR:
      return state.filter((el) => el.id != payload);
      
    default:
      return state;
  }
}

export default carslistReducer;
