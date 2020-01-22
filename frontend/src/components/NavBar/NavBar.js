// @flow

import { AppBar, makeStyles, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles({
	toolbar: {
		display: "flex",
		justifyContent: "space-between"
	},
	navLink: {
		color: "white",
		textDecoration: "none",
		paddingBottom: 5,
		fontSize: 20,
		marginLeft: 20
	},
	activeNavLink: {
		borderBottom: "2px solid white"
	}
});

const NavBar = () => {
	const classes = useStyles();
	return (
		<AppBar position="absolute">
			<Toolbar className={classes.toolbar}>
				<Typography variant="h5">Auto</Typography>
				<div>
					<NavLink
						to="/"
						exact
						className={classes.navLink}
						activeClassName={classes.activeNavLink}
					>
						Cars
					</NavLink>
					<NavLink
						to="/owners"
						className={classes.navLink}
						activeClassName={classes.activeNavLink}
					>
						Owners
					</NavLink>
				</div>
			</Toolbar>
		</AppBar>
	);
};

export default NavBar;
