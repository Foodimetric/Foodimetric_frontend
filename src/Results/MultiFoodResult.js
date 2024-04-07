import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { useFoodContext } from '../Context/FoodContext';
import { addTotal } from '../utils/findkey';
import '../components/search.css'

const excludeKeys = ['Id', 'Code', 'REFID'];

const MultiFoodResult = () => {
    const [allRows, setAllRows] = useState({});
    const { multiFoodResults } = useFoodContext();

    const renderTableRows = (item) => {
        return Object.entries(item.details)
            .filter(([key, value]) => !excludeKeys.includes(key) && value !== null)
            .map(([key, value]) => {
                let displayValue = value;
                if (typeof value === 'number') {
                    displayValue = ((parseFloat(value) * parseInt(item?.details?.WEIGHT)) / 100).toFixed(2).toString();
                }
                return { key, displayValue };
            });
    };

    useEffect(() => {
        const rows = [];
        multiFoodResults.forEach(item => {
            const renderedRows = renderTableRows(item);
            rows.push(renderedRows);
        });
        const total = addTotal(rows);
        setAllRows(total);
    }, [multiFoodResults]);


    return (
        <TableContainer>
            <Table>
                {multiFoodResults?.map((item, index) => {
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
            {allRows && Object.keys(allRows).length > 0 && <h3 id='total'>Total Nutrient consumed</h3>}
            <Table>
                <TableHead style={{ backgroundColor: 'rgb(1, 116, 1)', height: 80 }}>
                    <TableRow>
                        {allRows && Object.entries(allRows).map(([key, value]) => {
                            if (!isNaN(value) && key !== "WEIGHT") {
                                return (
                                    <TableCell key={key} style={{ fontWeight: 'bolder', color:'rgb(245, 245, 245)', fontSize: '14px' }}>
                                        {key}
                                    </TableCell>
                                );
                            } else {
                                return null; // Do not render if value is NaN
                            }
                        })}
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        {allRows && Object.entries(allRows).map(([key, value]) => {
                            if (!isNaN(value) && key !== "WEIGHT") {
                                return (
                                    <TableCell key={key}>{value.toFixed(2)}</TableCell>
                                );
                            } else {
                                return null;
                            }
                        })}
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default MultiFoodResult;
