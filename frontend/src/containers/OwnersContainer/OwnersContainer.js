import { Typography } from "@material-ui/core";
import React, { Component, Fragment } from "react";
import ErrorAlert from "../../common/ErrorAlert";

class OwnersContainer extends Component {
	render() {
		return (
			<Fragment>
				<Typography component="h5" variant="h5" gutterBottom>
					Owners
				</Typography>
				<ErrorAlert msg="Page under construction ..." color="black" />
			</Fragment>
		);
	}
}

export default OwnersContainer;
