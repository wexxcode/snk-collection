import React from "react";
import {Table, TableHead, TableRow, TableCell, TableBody, TableContainer} from "@material-ui/core";
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

interface Params {
    data: Item[]
}

export type Item = {
    marca: string,
    modelo: string,
}

const SnkDataTable: React.FC<Params> = ({
    data
}) => {
    const classes = useStyles();
    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Marca</TableCell>
                        <TableCell align="right">Modelo</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row, key) => (
                        <TableRow key={key}>
                            <TableCell component="th" scope="row">
                                {row.marca}
                            </TableCell>
                            <TableCell align="right">{row.modelo}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default SnkDataTable;
