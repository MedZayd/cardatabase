import { IconButton, makeStyles, ThemeProvider } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import React from "react";
import { Route, Switch } from "react-router";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import CarsContainer from "./containers/CarsContainer";
import OwnersContainer from "./containers/OwnersContainer";
import { theme } from "./utility/ui/themes";

const useStyles = makeStyles({
	main: {
		width: "90%",
		margin: "0 auto",
		padding: 20,
		marginTop: 100
	}
});

toast.configure({
	newestOnTop: true,
	position: "bottom-right",
	className: "toast-body",
	closeButton: (
		<IconButton style={{ color: "white" }}>
			<CloseIcon />
		</IconButton>
	)
});

const App = () => {
	const classes = useStyles();

	return (
		<ThemeProvider theme={theme}>
			<NavBar />
			<div className={classes.main}>
				<Switch>
					<Route path="/owners" component={OwnersContainer} />
					<Route path="/" exact component={CarsContainer} />
				</Switch>
			</div>
		</ThemeProvider>
	);
};

export default App;
