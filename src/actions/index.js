export const GET_CAR_TYPES_DATA = 'GET_CAR_TYPES_DATA';
export const DATA_RECEIVED_CAR_TYPES= 'DATA_RECEIVED_CAR_TYPES';
export const GET_SELECTCAR ="GET_SELECTCAR";
export const SET_SELECTCAR ="SET_SELECTCAR";
export const GET_COMPANIES = "GET_COMPANIES";
export const DATA_RECEIVED_COMPANIES = "DATA_RECEIVED_COMPANIES"; 
export const GET_DISCOUNT = "GET_DISCOUNT";
export const DATA_RECEIVED_DISCOUNT = "DATA_RECEIVED_DISCOUNT";

export const getDiscount =()=>({
  type: GET_DISCOUNT
})
export const dataReceivedDiscount = (data) => ({
  type: DATA_RECEIVED_DISCOUNT,
  payload: data 
});
export const getCompanies =()=>({
  type: GET_COMPANIES
})
export const dataReceivedCompanies = (data) => ({
  type: DATA_RECEIVED_COMPANIES,
  payload: data 
});
export const getCarTypesData = () => ({
  type: GET_CAR_TYPES_DATA,
});
export const setAuth = (authData) => ({
  type: 'SET_AUTH',
  payload: authData 
});
export const dataRecievedCarTypes = (json) => ({
  type: DATA_RECEIVED_CAR_TYPES,
   payload:json 
});
export const getSelectCar =()=>({
  type: GET_SELECTCAR
})
export const setSelectCar =(finalSelectCar) =>({
  type: SET_SELECTCAR,
  payload: finalSelectCar 
})

