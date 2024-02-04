import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { useFoodContext } from '../Context/FoodContext';

const NutrientResult = () => {
    const {nutrientResult} = useFoodContext();
    return (
        <TableContainer>
            <Table stickyHeader >
                {nutrientResult.nutrientName && <TableHead style={{ backgroundColor: 'rgba(224, 149, 35, 0.50)', height: 80 }}>
                    <TableRow>
                        <TableCell style={{ fontWeight: 'bolder', fontSize: '18px' }}>Nutrient</TableCell>
                        <TableCell style={{ fontWeight: 'bolder', fontSize: '18px' }}>Nutrient Quantity</TableCell>
                        <TableCell style={{ fontWeight: 'bolder', fontSize: '18px' }}>Food</TableCell>
                        <TableCell style={{ fontWeight: 'bolder', fontSize: '18px' }}>Food Quantity(g)</TableCell>
                    </TableRow>
                </TableHead>}
                <TableBody>
                    {nutrientResult.nutrientName && <TableRow>
                        <TableCell>{nutrientResult.nutrientName}</TableCell>
                        <TableCell>{nutrientResult.nutrientQuantity}</TableCell>
                        <TableCell>{nutrientResult.foodName}</TableCell>
                        {nutrientResult.nutrientValue && (
                            <TableCell>
                                {((parseFloat(nutrientResult.nutrientQuantity) * 100) / parseInt(nutrientResult.nutrientValue)).toFixed(2).toString()}
                            </TableCell>
                        )}
                    </TableRow>}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default NutrientResult;