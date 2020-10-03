import {GET_DISCOUNT,DATA_RECEIVED_DISCOUNT} from "../actions";
const discountReducer = (state={},action)=>{
    switch (action.type) {
        case GET_DISCOUNT:
          return { ...state, loading: true };
        case DATA_RECEIVED_DISCOUNT:
          return { ...state, data: action.json, loading: false }
        default:
          return state;
      }
  }
  export default discountReducer;