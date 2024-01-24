import React, { useMemo } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const tableHeadStyle = {
    backgroundColor: 'rgba(224, 149, 35, 0.50)',
    height: 80,
};

const cellStyle = {
    fontWeight: 'bolder',
    fontSize: '14px',
};

const FoodResult = React.memo(({ data, selectedValue }) => {
    const processedData = useMemo(() => {
       const excludeKeys = ['Id', 'Code', 'REFID'];
       if (!data) return [];

       return Object.entries(data).reduce((acc, [key, value]) => {
           // Skip the keys in the exclusion list
           if (excludeKeys.includes(key) || value === null) return acc;


            let processedValue = value;
            if (typeof value === 'number') {
                processedValue = ((parseFloat(value) * parseInt(selectedValue)) / 100).toString();
            }

            acc.push({ key, value: processedValue });
            return acc;
        }, []);
    }, [data, selectedValue]);
    return (
        <TableContainer>
            <Table stickyHeader>
                <TableHead style={tableHeadStyle}>
                    <TableRow>
                        {processedData?.map(({ key }) => (
                            <TableCell key={key} style={cellStyle}>{key}</TableCell>
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
