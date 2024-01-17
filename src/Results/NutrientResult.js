import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const NutrientResult = ({ result }) => {
    return (
        <TableContainer>
            <Table stickyHeader >
                {result.nutrientName && <TableHead style={{ backgroundColor: 'rgba(224, 149, 35, 0.50)', height: 80 }}>
                    <TableRow>
                        <TableCell style={{ fontWeight: 'bolder', fontSize: '18px' }}>Nutrient</TableCell>
                        <TableCell style={{ fontWeight: 'bolder', fontSize: '18px' }}>Nutrient Quantity</TableCell>
                        <TableCell style={{ fontWeight: 'bolder', fontSize: '18px' }}>Food</TableCell>
                        <TableCell style={{ fontWeight: 'bolder', fontSize: '18px' }}>Food Quantity(g)</TableCell>
                    </TableRow>
                </TableHead>}
                <TableBody>
                    {result.nutrientName && <TableRow>
                        <TableCell>{result.nutrientName}</TableCell>
                        <TableCell>{result.nutrientQuantity}</TableCell>
                        <TableCell>{result.foodName}</TableCell>
                        {result.nutrientValue && (
                            <TableCell>
                                {((parseFloat(result.nutrientQuantity) * 100) / parseInt(result.nutrientValue)).toFixed(1).toString()}
                            </TableCell>
                        )}
                    </TableRow>}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default NutrientResult;