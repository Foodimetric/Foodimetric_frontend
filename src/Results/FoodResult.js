import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';


const FoodResult = ({ data, selectedValue }) => {
    return (
        <TableContainer >
            <Table stickyHeader >
                <TableHead style={{ backgroundColor: 'rgba(224, 149, 35, 0.50)', height: 80 }}>
                    <TableRow>
                        {data && Object.entries(data).map(([key, value]) => {
                            if (key !== "FOOD\nCODE") {
                                return (
                                    <TableCell style={{ fontWeight: 'bolder', fontSize: '14px' }}>{key}</TableCell>
                                );
                            }
                        })}
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        {data && Object.entries(data).map(([key, value]) => {
                            if (key !== "FOOD\nCODE") {
                                if (selectedValue && key !== "FOOD NAME\nIN ENGLISH") {
                                    value = ((parseFloat(value) * parseInt(selectedValue)) / 100).toString(); // Convert the value to an integer, divide by 2, and convert it back to a string
                                }
                                return (
                                    <TableCell>{value}</TableCell>
                                );
                            }
                        })}

                    </TableRow>


                </TableBody>
            </Table>
        </TableContainer >
    );
}

export default FoodResult;