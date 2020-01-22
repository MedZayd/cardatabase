// @flow
import axios from "axios";
import { toast } from "react-toastify";
import { put, takeLatest } from "redux-saga/effects";
import { SERVER_URL } from "../../api";
import { deleteCarError, fetchCars, fetchCarsError, fetchCarsSuccess } from "../actions";
import { DELETE_CAR, FETCH_CARS } from "../actions/actionTypes";
import type { DeleteCarType } from "../actions/actionTypes";
import type { Saga } from "redux-saga";
import type { AxiosResponseType } from "../../types/responseTypes";
import type { CarType } from "../../types/carsTypes";

function* fetchCarsSaga(): Saga<void> {
	try {
		const response: AxiosResponseType<Array<CarType>> = yield axios.get(
			SERVER_URL + "api/cars"
		);
		const { cars } = response.data._embedded;
		yield put(fetchCarsSuccess(cars));
	} catch (error) {
		if (error.response) {
			yield put(fetchCarsError("Server error."));
			yield toast.error("Server error.");
		} else if (error.request) {
			yield put(fetchCarsError(error.message));
			yield toast.error(error.message);
		} else {
			yield put(fetchCarsError(error.message));
			yield toast.error(error.message);
		}
	}
}

export function* watchFetchCarsSaga(): Saga<void> {
	yield takeLatest(FETCH_CARS, fetchCarsSaga);
}

function* deleteCarSaga(action: DeleteCarType): Saga<void> {
	try {
		yield axios.delete(action.url);
		yield toast.success("Car deleted !");
		yield put(fetchCars());
	} catch (error) {
		if (error.response) {
			yield put(deleteCarError("Server error."));
			yield toast.error("Server error.");
		} else if (error.request) {
			yield put(deleteCarError("Network error."));
			yield toast.error("Network error.");
		} else {
			yield put(deleteCarError(error.message));
			yield toast.error(error.message);
		}
	}
}

export function* watchdeleteCarSaga(): Saga<void> {
	yield takeLatest(DELETE_CAR, deleteCarSaga);
}
