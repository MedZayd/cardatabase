import { all } from "redux-saga/effects";
import { watchdeleteCarSaga, watchFetchCarsSaga } from "./cars";

export default function* rootSaga() {
	yield all([
		watchFetchCarsSaga(),
		watchdeleteCarSaga()
	]);
}