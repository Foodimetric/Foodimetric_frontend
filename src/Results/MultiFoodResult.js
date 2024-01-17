import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';


const MultiFoodResult = ({ result }) => {
    return (
        <TableContainer>
            <Table>
                {result.map((items, key) => (
                    <>
                        <TableHead style={{ backgroundColor: 'rgba(224, 149, 35, 0.50)', height: 80 }}>
                            <TableRow>
                                {
                                    Object.entries(items.details).map(([key, value]) => {
                                        if (key !== "FOOD\nCODE") {
                                            return (
                                                
                                                <TableCell style={{ fontWeight: 'bolder', fontSize: '14px' }}>{key}</TableCell>
                                            )
                                        }
                                    })
                                }
                            </TableRow>
                        </TableHead>
                        <TableBody>           
                            {Object.entries(items.details).map(([key, value]) => {
                            if (key !== "FOOD\nCODE") {
                                if (items.weight && key !== "FOOD NAME\nIN ENGLISH") {
                                    value = ((parseFloat(value) * parseInt(items.weight)) / 100).toString(); // Convert the value to an integer, divide by 2, and convert it back to a string
                                }
                                return (
                                    <TableCell>{value}</TableCell>
                                );
                            }
                        })}
                        </TableBody>
                    </>
                ))}
            </Table>
        </TableContainer>
    );
}

export default MultiFoodResult;