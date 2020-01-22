// @flow

import { Button } from "@material-ui/core";
import React, { Component } from "react";
import Popup from "../../common/Popup";
import CarForm from "../../components/CarForm/CarForm";

type State = {
	open: boolean
};

class AddCarContainer extends Component<{}, State> {
	state = {
		open: false
	};

	handlePopup = () => {
		this.setState(prevState => ({ open: !prevState.open }));
	};

	render() {
		return (
			<div>
				<Button onClick={this.handlePopup}>Open</Button>
				<Popup
					title="Add new car"
					content={<CarForm />}
					actions={<Button onClick={this.handlePopup}>Cancel</Button>}
					open={this.state.open}
					handleClose={this.handlePopup}
				/>
			</div>
		);
	}
}

export default AddCarContainer;
