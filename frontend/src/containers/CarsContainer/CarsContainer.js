// @flow

import { Button, Typography, withStyles } from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";
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
	addFormOpen: boolean
};

class CarsContainer extends Component<Props, State> {
	state = {
		alert: false,
		link: null,
		addFormOpen: false
	};

	componentDidMount() {
		this.props.onFetchCars();
	}

	handleAlert = () => {
		this.setState(prevState => ({ alert: !prevState.alert }));
	};

	handleAddFormOpen = () => {
		this.setState(prevState => ({ addFormOpen: !prevState.addFormOpen }));
	};

	handleConfirmDelete = url => {
		this.setState({ link: url });
		this.handleAlert();
	};

	handleOnDeleteCar = () => {
		if (this.state.link) {
			this.props.onDeleteCar(this.state.link);
			this.setState({ link: null });
		}
		this.handleAlert();
	};

	handleAddFormSubmit = values => {
		console.log(values);
		this.handleAddFormOpen();
	};

	renderAlertPopupActions = () => (
		<Fragment>
			<Button onClick={this.handleAlert} color="secondary" autoFocus>
				Cancel
			</Button>
			<Button onClick={this.handleOnDeleteCar} color="primary">
				Confirm
			</Button>
		</Fragment>
	);

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
						<Button onClick={this.handleAddFormOpen} startIcon={<AddCircleIcon />}>
							Add a new car
						</Button>
					</div>
					<CarList cars={cars.list} handleOnDelete={this.handleConfirmDelete} />
				</Fragment>
			);
		}

		if (cars.error) {
			content = <ErrorAlert msg={cars.error} />;
		}

		const { alert, addFormOpen } = this.state;
		return (
			<Fragment>
				{content}
				<Popup
					title="Are you sure?"
					content="Do you really want to delete this record? This process cannot be undone."
					open={alert}
					handleClose={this.handleAlert}
					actions={this.renderAlertPopupActions()}
				/>
				<Popup
					title="Add new car"
					content={
						<CarForm
							onSubmit={this.handleAddFormSubmit}
							onCancel={this.handleAddFormOpen}
						/>
					}
					open={addFormOpen}
					handleClose={this.handleAddFormOpen}
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
