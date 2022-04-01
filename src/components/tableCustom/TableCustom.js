import React from 'react';
// Material UI Components
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
// Custom Components
import RowCustom from './RowCustom';
// Styles
import styles from './tableCustom.module.css'

const createData = (name, id, date, purpose, amount, comment) => {
  return {
    name,
    id,
    date,
    purpose,
    amount,
    comment
  };
}

const rows = [
  createData('Ram', '#pt001', '01-04-2022', 'General', 100, 'Lorem Ipsuummmm!!!'),
  createData('Shyam', '#pt002', '01-04-2022', 'General', 300, 'Lorem Ipsu ascasda afb 25tgva asd12@#'),
  createData('Travis', '#pt003', '01-04-2022', 'General', 200, 'Lorem ipsum dolor sit amet, consectetur '),
  createData('Lorem', '#pt035', '02-04-2022', 'General', 340, 'Lorem ipsum dolor sit amet, consectetur '),
  createData('Richard', '#pt001', '02-04-2022', 'General', 200, ''),
  createData('Ipsum', '#pt001', '01-04-2022', 'General', 300, 'Lorem ipsum dolor sit amet, consectetur '),
  createData('Gina', '#pt001', '01-04-2022', 'General', 320),
  createData('Ram', '#pt001', '01-04-2022', 'General', 100, 'Lorem Ipsuummmm!!!'),
  createData('Shyam', '#pt001', '01-04-2022', 'General', 300, 'Lorem Ipsu ascasda afb 25tgva asd12@#'),
  createData('Travis', '#pt001', '01-04-2022', 'General', 200, 'Lorem ipsum dolor sit amet, consectetur '),
  createData('Lorem', '#pt001', '02-04-2022', 'General', 340, 'Lorem ipsum dolor sit amet, consectetur '),
];


const TableCustom = () => {
  return (
    <TableContainer component={Paper} sx={{ maxHeight: 530 }}>
      <Table stickyHeader aria-label="collapsible table">
        <TableHead className={styles.tableHeader}>
          <TableRow>
            <TableCell />
            <TableCell>Patient Name</TableCell>
            <TableCell align="right" >Patient ID</TableCell>
            <TableCell align="right" className={styles.tableCell}>Appt. Date</TableCell>
            <TableCell align="right">Purpose</TableCell>
            <TableCell align="right">Amount</TableCell>
            <TableCell sx={{ maxWidth: "300px" }} />
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, i) => (
            <RowCustom key={i} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TableCustom
