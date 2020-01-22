// @flow

import { Button, Typography, withStyles } from "@material-ui/core";
import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import ErrorAlert from "../../common/ErrorAlert";
import Popup from "../../common/Popup";
import Spinner from "../../common/Spinner/Spinner";
import CarForm from "../../components/CarForm/CarForm";
import CarList from "../../components/CarList/CarList";
import { deleteCar, fetchCars } from "../../store/actions";
import type { StoreType } from "../../store/reducers/index";
import type { CarsStateType } from "../../store/reducers/cars";

const styles = {
	container: {
		display: "flex",
		justifyContent: "space-between",
		padding: "0 20px",
		marginBottom: 10
	}
};

type Props = {
	classes: Object,
	cars: CarsStateType,
	onFetchCars: Function,
	onDeleteCar: Function
};

type State = {
	alert: boolean,
	link: string | null,
	openFormPopup: boolean
};

class CarsContainer extends Component<Props, State> {
	state = {
		alert: false,
		link: null,
		openFormPopup: false
	};

	componentDidMount() {
		this.props.onFetchCars();
	}

	handleAlert = () => {
		this.setState(prevState => ({ alert: !prevState.alert }));
	};

	handleFormPopup = () => {
		this.setState(prevState => ({ openFormPopup: !prevState.openFormPopup }));
	};

	handleOnDelete = url => {
		this.setState({ link: url });
		this.handleAlert();
	};

	deleteCar = () => {
		if (this.state.link) {
			this.props.onDeleteCar(this.state.link);
			this.setState({ link: null });
		}
		this.handleAlert();
	};

	render() {
		const { cars, classes } = this.props;
		let content = null;
		if (cars.loading) {
			content = <Spinner msg="Loading cars" color="black" />;
		}

		if (cars.list) {
			content = (
				<Fragment>
					<div className={classes.container}>
						<Typography component="h5" variant="h5" gutterBottom>
							Cars
						</Typography>
						<Button onClick={this.handleFormPopup}>Open</Button>
					</div>
					<CarList cars={cars.list} handleOnDelete={this.handleOnDelete} />
				</Fragment>
			);
		}

		if (cars.error) {
			content = <ErrorAlert msg={cars.error} />;
		}

		const popupActions = (
			<Fragment>
				<Button onClick={this.handleAlert} color="primary" autoFocus>
					Cancel
				</Button>
				<Button onClick={this.deleteCar} color="secondary">
					Confirm
				</Button>
			</Fragment>
		);

		const { alert, openFormPopup } = this.state;
		return (
			<Fragment>
				{content}
				<Popup
					title="Are you sure?"
					content="Do you really want to delete this record? This process cannot be undone."
					open={alert}
					handleClose={this.handleAlert}
					actions={popupActions}
				/>
				<Popup
					title="Add new car"
					content={<CarForm />}
					actions={<Button onClick={this.handleFormPopup}>Cancel</Button>}
					open={openFormPopup}
					handleClose={this.handleFormPopup}
				/>
			</Fragment>
		);
	}
}

const mapStateToProps = (state: StoreType) => ({
	cars: state.cars
});

const mapDispatchToProps = {
	onFetchCars: fetchCars,
	onDeleteCar: deleteCar
};

const ConnectedCarsContainer = connect(mapStateToProps, mapDispatchToProps)(CarsContainer);
export default withStyles(styles)(ConnectedCarsContainer);
