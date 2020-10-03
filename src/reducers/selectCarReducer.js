import {GET_SELECTCAR,SET_SELECTCAR} from "../actions";

const selectCarReducer = (state={},action)=>{
    switch (action.type) {
        case GET_SELECTCAR:
          return state;
        case SET_SELECTCAR:
          return action.payload
        default:
          return state;
      }
  }
  export default selectCarReducer;