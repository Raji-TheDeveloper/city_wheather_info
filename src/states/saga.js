import { put, takeEvery, call } from "redux-saga/effects";
import cityDetails from "./Api";

export function* incrementAsync(action) {
  try {
    const response = yield call(cityDetails, action.payload);
    yield put({ type: "GET_CITY_DETAILS_RESPONSE", response });
  } catch (error) {
    yield put({ type: "GET_CITY_DETAILS_FAILED", error });
  }
}

export default function* rootSaga() {
  yield takeEvery("GET_CITY_DETAILS", incrementAsync);
}
