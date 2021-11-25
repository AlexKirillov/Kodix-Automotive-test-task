import {
  GET_CARSLIST, ADD_CAR, DELETE_CAR,
} from "../types/carslistTypes";


export function setAll(value) {
  return {
    type: GET_CARSLIST,
    payload: value,
  };
}


export const getAllCarlist = () => async (dispatch) => {
  let response = await fetch('https://rawgit.com/Varinetz/e6cbadec972e76a340c41a65fcc2a6b3/raw/90191826a3bac2ff0761040ed1d95c59f14eaf26/frontend_test_table.json');
  let content = await response.json();
  dispatch(setAll(content));
}


export function addNewCar(id, title, description, year, color, status, price) {
  return {
    type: ADD_CAR,
    payload: { id, title, description, year, color, status, price },
  };
}

export const getNewCar = (id, title, description, year, color, status, price) => async (dispatch) => {
  dispatch(addNewCar(id, title, description, year, color, status, price));
}

export function deleteCar(id) {
  return {
    type: DELETE_CAR,
    payload: id,
  };
}

export const removeCar = (id) => async (dispatch) => {
  dispatch(deleteCar(id));
};