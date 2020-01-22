import { combineReducers } from "redux";
import carsReducer from "./cars";
import type { CarsStateType } from "./cars";

export type StoreType = {
	cars: CarsStateType
};

const reducer = combineReducers({
	cars: carsReducer
});

export default reducer;
