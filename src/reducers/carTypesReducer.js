import {GET_CAR_TYPES_DATA,DATA_RECEIVED_CAR_TYPES} from "../actions";
const carTypesReducer = (state={},action)=>{
    switch (action.type) {
        case GET_CAR_TYPES_DATA:
          return { ...state, loading: true };
        case DATA_RECEIVED_CAR_TYPES:
          return { ...state, data: action.json, loading: false }
        default:
          return state;
      }
  }
  export default carTypesReducer;