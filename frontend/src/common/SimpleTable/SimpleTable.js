// @flow

import { IconButton } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import DeleteIcon from "@material-ui/icons/Delete";
import React from "react";
import type { CarType } from "../../types/carsTypes";

const useStyles = makeStyles({
	table: {
		minWidth: 650
	},
	head: {
		fontWeight: "bold"
	}
});

type ColumnType = {
	id: string,
	label: string
};

type Props = {
	columns: Array<ColumnType>,
	rows: Array<CarType>,
	onDeleteAction: Function
};

const SimpleTable = (props: Props) => {
	const classes = useStyles();

	let tableColumns = null;
	if (props.columns) {
		tableColumns = (
			<TableRow className={classes.tableHead}>
				{props.columns.map(column => (
					<TableCell key={column.id} style={{ fontWeight: "bold" }}>
						{column.label}
					</TableCell>
				))}
				<TableCell style={{ fontWeight: "bold" }}>Actions</TableCell>
			</TableRow>
		);
	}

	let tableCells = null;
	if (props.rows) {
		tableCells = props.rows.map((row, index) => (
			<TableRow key={index}>
				{props.columns.map(column => (
					<TableCell key={column.id}>{row[column.id]}</TableCell>
				))}
				{row._links && (
					<TableCell>
						<IconButton
							color="primary"
							onClick={() => props.onDeleteAction(row._links.self.href)}
						>
							<DeleteIcon />
						</IconButton>
					</TableCell>
				)}
			</TableRow>
		));
	}

	return (
		<TableContainer component={Paper}>
			<Table className={classes.table} aria-label="simple table">
				<TableHead>{tableColumns}</TableHead>
				<TableBody>{tableCells}</TableBody>
			</Table>
		</TableContainer>
	);
};

export default SimpleTable;
