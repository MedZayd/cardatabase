// @flow

import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import ErrorAlert from "../../common/ErrorAlert";
import SimpleTable from "../../common/SimpleTable";
import { convertCamelCase } from "../../utility";
import type { CarType } from "../../types/carsTypes";

const useStyles = makeStyles({
	container: {
		width: "50%",
		margin: "0 auto",
		textAlign: "center"
	}
});

type Props = {
	cars: Array<CarType>,
	handleOnDelete: Function
};

const CarList = (props: Props) => {
	const classes = useStyles();
	let content = null;
	if (props.cars.length > 0) {
		let columns,
			rows = [];
		rows = props.cars.map(car =>
			Object.keys(car).reduce((obj, key) => {
				if (key !== "_links") {
					obj[key] = car[key];
				}
				return obj;
			}, {})
		);
		columns = Object.keys(rows[0]).map(k => ({
			id: k,
			label: convertCamelCase(k)
		}));
		content = (
			<SimpleTable
				columns={columns}
				rows={props.cars}
				onDeleteAction={props.handleOnDelete}
			/>
		);
	} else {
		content = (
			<div className={classes.container}>
				<Typography component="h6" variant="h6">
					<ErrorAlert iconOnly color="black" />
					No cars found ! Start adding cars.
				</Typography>
			</div>
		);
	}
	return content;
};

export default CarList;
