import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';


const MultiNutrient = ({ result }) => {
    console.log(result);
    return (
        <TableContainer>
            <Table>
                {result.length > 1 && <TableHead style={{ backgroundColor: 'rgba(224, 149, 35, 0.50)', height: 80 }}>
                    <TableRow>
                        <TableCell style={{ fontWeight: 'bolder', fontSize: '14px', textTransform: 'uppercase' }}>Nutrient</TableCell>
                        <TableCell style={{ fontWeight: 'bolder', fontSize: '14px', textTransform: 'uppercase' }}>Nutrient Quantity</TableCell>
                        <TableCell style={{ fontWeight: 'bolder', fontSize: '14px', textTransform: 'uppercase' }}>Food Name</TableCell>
                        <TableCell style={{ fontWeight: 'bolder', fontSize: '14px', textTransform: 'uppercase' }}>Food Quantity(g)</TableCell>
                    </TableRow>
                </TableHead>}
                {result.map((item, index) => (
                    <TableBody>

                        <TableRow >
                            <TableCell>{item.nutrient}</TableCell>
                            <TableCell>{item.foodWeight}</TableCell>
                            <TableCell>{item.foodName}</TableCell>
                            <TableCell>
                                {item.result === 'Food not found in data' || item.result === 'Nutrient not found in details'
                                    ? item.result
                                    : ((parseFloat(item.foodWeight) * 100) / (parseFloat(item.result))).toString()}
                            </TableCell>
                        </TableRow>
                    </TableBody>
                ))}
            </Table>
        </TableContainer>
    );
}

export default MultiNutrient;