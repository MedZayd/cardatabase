import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import carsReducer from "./cars";
import type { CarsStateType } from "./cars";

export type StoreType = {
	cars: CarsStateType
};

const reducer = combineReducers({
	cars: carsReducer,
	form: formReducer
});

export default reducer;
