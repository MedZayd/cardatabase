import { makeStyles, Typography } from "@material-ui/core";
import WarningIcon from "@material-ui/icons/Warning";
import React from "react";

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

type Props = {
	msg: string,
	iconOnly: boolean,
	color: string
};

const ErrorAlert = ({ msg, iconOnly = false, color = "red" }: Props) => {
	const classes = useStyles();
	return (
		<div className={classes.container}>
			<WarningIcon fontSize="large" style={{ color: color }} />
			{!iconOnly && msg && (
				<Typography component="h5" variant="h5" style={{ color: color }}>
					{msg}
				</Typography>
			)}
		</div>
	);
};

export default ErrorAlert;
