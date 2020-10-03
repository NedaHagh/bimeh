import carTypesReducer from "./carTypesReducer";
import authReducer from "./authReducer";
import selectCarReducer from "./selectCarReducer";
import companyReducer from "./companyReducer";
import discountReducer from "./discountReducer";
import { combineReducers } from "redux";

export default combineReducers({
  carTypes: carTypesReducer,
  auth: authReducer,
  selectCar: selectCarReducer,
  companiesData: companyReducer,
  discount: discountReducer
});