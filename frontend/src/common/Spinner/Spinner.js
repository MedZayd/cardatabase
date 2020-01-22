// @flow

import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { OrbitSpinner } from "react-epic-spinners";

type Props = {
	+msg?: string,
	+loaderOnly?: boolean,
	+color?: string
};

const useStyles = makeStyles({
	container: {
		width: "50%",
		margin: "0 auto",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center"
	}
});

const Spinner = ({ msg, loaderOnly = false, color = "blue" }: Props) => {
	const classes = useStyles();
	let spinner = (
		<div className={classes.container}>
			<OrbitSpinner color={color} />
			{!loaderOnly && msg && (
				<Typography variant="h6" style={{ color: color }}>
					{msg}
				</Typography>
			)}
		</div>
	);
	return spinner;
};

export default Spinner;
