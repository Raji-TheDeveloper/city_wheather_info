import { fork, all } from "redux-saga";
import watchStateSaga from "./states/saga";

export default function* rootSaga() {
  yield all([fork(watchStateSaga)]);
}
