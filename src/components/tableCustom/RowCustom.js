import React from 'react';
// Material UI Components
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
// Icons
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import styles from './tableCustom.module.css'

const RowCustom = (props) => {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  const handleAccept = () => { }
  const handleReject = () => { }

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }} className={styles.tableRow}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="right">{row.id}</TableCell>
        <TableCell align="right">{row.date}</TableCell>
        <TableCell align="right">{row.purpose}</TableCell>
        <TableCell align="right">{row.amount}</TableCell>
        <TableCell align="center">
          <Stack direction="row" justifyContent="center" spacing={2}>
            <Chip
              label="Accept"
              className={styles.chipSuccess}
              onClick={handleAccept}
            />
            <Chip
              label="Reject"
              className={styles.chipReject}
              onClick={handleReject}
            />
          </Stack>
        </TableCell>
      </TableRow>
      <TableRow className={styles.rowCollapse}>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={7}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <p style={{ fontWeight: 'bold', paddingBottom: '0.875rem' }}>Comment:</p>
              <Paper variant="outlined" sx={{ p: 2, fontSize: 12 }}>
                {row.comment}
              </Paper>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default RowCustom

RowCustom.propTypes = {
  row: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    purpose: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired
  }).isRequired,
};
