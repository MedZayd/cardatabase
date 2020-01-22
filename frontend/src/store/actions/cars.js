// @flow
import {
	DELETE_CAR,
	DELETE_CAR_ERROR,
	FETCH_CARS,
	FETCH_CARS_ERROR,
	FETCH_CARS_SUCCESS
} from "./actionTypes";

import type { CarType } from "../../types/carsTypes";
import type { ActionType } from "./actionTypes";

export const fetchCars = (): ActionType => ({
	type: FETCH_CARS
});

export const fetchCarsSuccess = (data: Array<CarType>): ActionType => ({
	type: FETCH_CARS_SUCCESS,
	data
});

export const fetchCarsError = (error: string): ActionType => ({
	type: FETCH_CARS_ERROR,
	error
});

export const deleteCar = (url: string): ActionType => ({
	type: DELETE_CAR,
	url
});

export const deleteCarError = (error: string): ActionType => ({
	type: DELETE_CAR_ERROR,
	error
});
