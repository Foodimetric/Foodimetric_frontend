import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const excludeKeys = ['Id', 'Code', 'REFID'];

const MultiFoodResult = ({ result }) => {
    const renderTableRows = (item) => {
        return Object.entries(item.details)
            .filter(([key, value]) => !excludeKeys.includes(key) && value !== null)
            .map(([key, value]) => {
                let displayValue = value;
                if (typeof value === 'number') {
                    displayValue = ((parseFloat(value) * parseInt(item?.details?.WEIGHT)) / 100).toString();
                }
                return { key, displayValue };
            });
    };

    return (
        <TableContainer>
            <Table>
                {result.map((item, index) => {
                    const rows = renderTableRows(item);
                    return (
                        <React.Fragment key={index}>
                            <TableHead style={{ backgroundColor: 'rgba(224, 149, 35, 0.50)', height: 80 }}>
                                <TableRow>
                                    {rows.map(row => (
                                        <TableCell key={row.key} style={{ fontWeight: 'bolder', fontSize: '14px' }}>
                                            {row.key}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map(row => (
                                    <TableCell key={row.key}>{row.displayValue}</TableCell>
                                ))}
                            </TableBody>
                        </React.Fragment>
                    );
                })}
            </Table>
        </TableContainer>
    );
}

export default MultiFoodResult;
