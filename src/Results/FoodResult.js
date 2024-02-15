import React, { useMemo } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { useFoodContext } from '../Context/FoodContext';


const FoodResult = React.memo(() => {
    const { selectedValue, foodResults } = useFoodContext();

    const processedData = useMemo(() => {
       const excludeKeys = ['Id', 'Code', 'REFID'];
       if (!foodResults) return [];

       const details = foodResults?.details || {};
       return Object.entries(details).reduce((acc, [key, value]) => {
           // Skip the keys in the exclusion list
           if (excludeKeys.includes(key) || value === null) return acc;


            let processedValue = value;
            if (typeof value === 'number') {
                processedValue = ((parseFloat(value) * parseInt(selectedValue)) / 100).toFixed(2).toString();
            }

            acc.push({ key, value: processedValue });
            return acc;
        }, []);
    }, [foodResults, selectedValue]);

    return (
        <TableContainer>
            <Table>
                <TableHead style={{ backgroundColor: 'rgba(224, 149, 35, 0.50)', height: 80 }}>
                    <TableRow>
                        {processedData?.map(({ key }) => (
                            <TableCell key={key} style={{ fontWeight: 'bolder', fontSize: '14px' }}>{key}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        {processedData?.map(({ key, value }) => (
                            <TableCell key={key}>{value}</TableCell>
                        ))}
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
});

export default FoodResult;
