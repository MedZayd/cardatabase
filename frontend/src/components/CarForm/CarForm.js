// @flow

import { Button } from "@material-ui/core";
import React from "react";
import { Field, reduxForm } from "redux-form";

type Props = {
	handleSubmit: Function,
	onCancel: Function
};

const CarForm = ({ handleSubmit, onCancel }: Props) => {
	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label htmlFor="brand">Brand</label>
				<Field name="brand" component="input" type="text" />
			</div>
			<div>
				<label htmlFor="model">Model</label>
				<Field name="model" component="input" type="text" />
			</div>
			<div>
				<label htmlFor="color">Color</label>
				<Field name="color" component="input" type="text" />
			</div>
			<div>
				<label htmlFor="registerNumber">Register Number</label>
				<Field name="registerNumber" component="input" type="text" />
			</div>
			<div>
				<label htmlFor="year">Year</label>
				<Field name="year" component="input" type="number" />
			</div>
			<div>
				<label htmlFor="price">Price</label>
				<Field name="price" component="input" type="number" />
			</div>
			<div>
				<Button onClick={onCancel} color="primary" autoFocus>
					Cancel
				</Button>
				<Button type="submit" onClick={handleSubmit} color="secondary">
					Confirm
				</Button>
			</div>
		</form>
	);
};

export default reduxForm({ form: "new-car" })(CarForm);
