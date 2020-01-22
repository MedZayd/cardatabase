// @flow

import { DialogTitle, makeStyles, withStyles } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import React from "react";
import type { Node } from "react";

type Props = {
	open: boolean,
	title: string,
	content: Node,
	actions: Node,
	handleClose: Function
};

const useStyles = makeStyles({
	container: {
		margin: "0 auto",
		textAlign: "center"
	}
});

const StyledDialogActions = withStyles(() => ({
	root: {
		justifyContent: "center"
	}
}))(DialogActions);

const Popup = (props: Props) => {
	const { title, content, actions, open, handleClose } = props;
	const classes = useStyles();
	return (
		<Dialog
			open={open}
			onClose={handleClose}
			className={classes.container}
			maxWidth="lg"
			aria-labelledby="alert-dialog-title"
			aria-describedby="alert-dialog-description"
		>
			{title && <DialogTitle id="alert-dialog-title">{title}</DialogTitle>}
			{content && <DialogContent>{content}</DialogContent>}
			{actions && <StyledDialogActions>{actions}</StyledDialogActions>}
		</Dialog>
	);
};

export default Popup;
