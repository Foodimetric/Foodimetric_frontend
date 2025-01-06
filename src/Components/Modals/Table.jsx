import React from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Tooltip
} from '@mui/material';

const ResultsTable = ({ results, tableHeadColor = '#ffba08', total }) => {
    // If there are no results, render nothing:
    if (!results || results.length === 0) {
        return null;
    }

    const truncate = (text, maxLength = 30) => {
        if (typeof text === 'string' && text.length > maxLength) {
            return `${text.slice(0, maxLength)}...`;
        }
        return text;
    };

    // Identify the use-case:
    const hasNutrientName = typeof results[0]?.nutrientName !== "undefined";
    const hasKeyValue = (typeof results[0]?.key !== "undefined") && (typeof results[0]?.value !== "undefined");

    // We'll store the "main" table in this variable:
    let mainTableContent;

    if (hasNutrientName) {
        // ------------------------------------------
        // USE CASE 1
        // ------------------------------------------
        const headers = Object.keys(results[0]); // dynamic table columns

        mainTableContent = (
            <Table>
                <TableHead style={{ backgroundColor: tableHeadColor }} className='capitalize'>
                    <TableRow>
                        {headers.map((header) => (
                            <TableCell
                                key={header}
                                style={{ fontWeight: 'bold', color: '#fff' }}
                            >
                                {header}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {results.map((row, rowIndex) => (
                        <TableRow key={rowIndex}>
                            {headers.map((header) => (
                                <TableCell key={`${rowIndex}-${header}`}>
                                    {row[header]}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        );
    } else if (hasKeyValue) {
        // ------------------------------------------
        // USE CASE 2
        // ------------------------------------------
        mainTableContent = (
            <Table>
                <TableHead style={{ backgroundColor: tableHeadColor }}>
                    <TableRow>
                        {results?.map(({ key }) => (
                            <TableCell key={key} style={{ fontWeight: 'bold', color: '#fff' }}>
                                {key}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        {results?.map(({ key, value }) => (
                            <TableCell key={key}>
                                <Tooltip title={value} arrow>
                                    <span>{truncate(value)}</span>
                                </Tooltip>
                            </TableCell>
                        ))}
                    </TableRow>
                </TableBody>
            </Table>
        );
    } else {
        // ------------------------------------------
        // NEW USE CASE (Catch-all)
        // ------------------------------------------
        const headers = Object.keys(results[0]);

        mainTableContent = (
            <Table>
                <TableHead style={{ backgroundColor: tableHeadColor }} className='capitalize'>
                    <TableRow>
                        {headers.map((header) => (
                            <TableCell
                                key={header}
                                style={{ fontWeight: 'bold', color: '#fff' }}
                            >
                                {header}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {results.map((row, rowIndex) => (
                        <TableRow key={rowIndex}>
                            {headers.map((header) => (
                                <TableCell key={`${rowIndex}-${header}`}>
                                    <Tooltip title={row[header]} arrow>
                                        <span>{truncate(row[header])}</span>
                                    </Tooltip>
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        );
    }

    // Now we return both:
    // 1) The main results table
    // 2) The "totals" table (only if `total` is truthy)
    return (
        <TableContainer component={Paper} className='my-4'>
            {mainTableContent}

            {/** Only render the totals table if `total` is truthy **/}
            {total && (
                <Table>
                    <TableHead style={{ backgroundColor: 'rgb(1, 116, 1)', height: 80 }}>
                        <TableRow>
                            {Object.entries(total).map(([key, value]) => {
                                if (!isNaN(value) && key !== "WEIGHT") {
                                    return (
                                        <TableCell
                                            key={key}
                                            style={{
                                                fontWeight: 'bolder',
                                                color: 'rgb(245, 245, 245)',
                                                fontSize: '14px'
                                            }}
                                        >
                                            {key}
                                        </TableCell>
                                    );
                                } else {
                                    return null;
                                }
                            })}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            {Object.entries(total).map(([key, value]) => {
                                if (!isNaN(value) && key !== "WEIGHT") {
                                    return (
                                        <TableCell key={key}>
                                            {value.toFixed(2)}
                                        </TableCell>
                                    );
                                } else {
                                    return null;
                                }
                            })}
                        </TableRow>
                    </TableBody>
                </Table>
            )}
        </TableContainer>
    );
};

export default ResultsTable;
