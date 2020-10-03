import { put, takeLatest, all } from 'redux-saga/effects';
import {GET_CAR_TYPES_DATA,DATA_RECEIVED_CAR_TYPES,GET_COMPANIES,
  DATA_RECEIVED_COMPANIES,GET_DISCOUNT,DATA_RECEIVED_DISCOUNT} from "../actions";

function* fetchData() {
    const json = yield fetch('https://bimename.com/bimename/core/data/third-car-types')
      .then(response => response.json());
  
    yield put({ type: DATA_RECEIVED_CAR_TYPES, json: json.result || [{ error: json.message }] });
  }

 function* fetchCompaniesData(){
    const data =  yield fetch('https://bimename.com/bimename/core/data/companies')
    .then(response => response.json());

  yield put({ type: DATA_RECEIVED_COMPANIES, json: data.result || [{ error: json.message }] });
 } 
 function* fetchDiscountData(){
  const data =  yield fetch('https://bimename.com/bimename/core/data/car-third-discount')
  .then(response => response.json());

yield put({ type: DATA_RECEIVED_DISCOUNT, json: data.result || [{ error: json.message }] });
 }

function* actionWatcher() {
    yield takeLatest(GET_CAR_TYPES_DATA, fetchData)
  }

function* getCompanyWatcher(){
    yield takeLatest(GET_COMPANIES, fetchCompaniesData)
  }
function* getDiscountWatcher(){
    yield takeLatest(GET_DISCOUNT, fetchDiscountData)
  }
  
export default function* rootSaga() {
    yield all([
      actionWatcher(),
      getCompanyWatcher(),
      getDiscountWatcher()
    ]);
  }