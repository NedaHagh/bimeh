import {GET_COMPANIES,DATA_RECEIVED_COMPANIES} from "../actions";
const companyReducer = (state={},action)=>{
    switch (action.type) {
        case GET_COMPANIES:
          return { ...state, loading: true };
        case DATA_RECEIVED_COMPANIES:
          return { ...state, data: action.json, loading: false }
        default:
          return state;
      }
  }
  export default companyReducer;