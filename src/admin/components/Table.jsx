import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const XTable = ({ headData, bodyData }) => {
  return (
    <TableContainer>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {headData.map((item) => (
              <TableCell key={item.id}>
                <p className="text-base font-semibold text-black">{item.title}</p>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {bodyData.map((row) => (
            <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              {headData.map((column) => (
                <TableCell key={column.id} component="th" scope="row">
                  {row[column.id]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default XTable;
