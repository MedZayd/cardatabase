// @flow

import type { CarType } from "../../types/carsTypes";

export const FETCH_CARS = "FETCH_CARS";
export const FETCH_CARS_SUCCESS = "FETCH_CARS_SUCCESS";
export const FETCH_CARS_ERROR = "FETCH_CARS_ERROR";
export const DELETE_CAR = "DELETE_CAR";
export const DELETE_CAR_ERROR = "DELETE_CAR_ERROR";

export type FetchCarsType = {| type: "FETCH_CARS" |};
export type FetchCarsSuccessType = {| type: "FETCH_CARS_SUCCESS", data: null | Array<CarType> |};
export type FetchCarsErrorType = {| type: "FETCH_CARS_ERROR", error: null | string |};
export type DeleteCarType = {| type: "DELETE_CAR", url: string |};
export type DeleteCarErrorType = {| type: "DELETE_CAR_ERROR", error: null | string |};

export type ActionType =
	| FetchCarsType
	| FetchCarsSuccessType
	| FetchCarsErrorType
	| DeleteCarType
	| DeleteCarErrorType;
