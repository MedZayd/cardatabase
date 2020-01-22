// @flow

import {
	DELETE_CAR,
	DELETE_CAR_ERROR,
	FETCH_CARS,
	FETCH_CARS_ERROR,
	FETCH_CARS_SUCCESS
} from "../actions/actionTypes";

import type { CarType } from "../../types/carsTypes";
import type { ActionType } from "../actions/actionTypes";

export type CarsStateType = {
	+list: Array<CarType> | null,
	+loading: boolean,
	+error: string | null
};

const initialState: CarsStateType = {
	list: null,
	loading: false,
	error: null
};

const reducer = (state: CarsStateType = initialState, action: ActionType): CarsStateType => {
	switch (action.type) {
		case FETCH_CARS:
			return { ...state, loading: true };
		case FETCH_CARS_SUCCESS:
			return {
				...state,
				loading: false,
				list: action.data ? action.data : null
			};
		case FETCH_CARS_ERROR:
			return {
				...state,
				loading: false,
				error: action.error ? action.error : null
			};
		case DELETE_CAR:
			return { ...state, loading: true };
		case DELETE_CAR_ERROR:
			return { ...state, loading: false, error: action.error ? action.error : null };
		default:
			return state;
	}
};

export default reducer;
