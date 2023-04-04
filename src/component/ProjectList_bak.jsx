import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';

function createData(num, code, category, name, responsibility) {
  return {
    num, code, category, name, responsibility,
  };
}

const rows = [
  createData(1, 'A123-123AA', '프로젝트', 'ㅁㅁㅁ', 'qqq'),
  createData(2, 'A123-123AA', '유지보수', 'ㅋㅋㅋ', 'www'),
  createData(3, 'A123-123AA', '유지보수', 'ㅇㅇㅇ', 'eee'),
  createData(4, 'A123-123AA', '유지보수', 'ㅎㅎㅎ', 'rrr'),
  createData(5, 'A123-123AA', '프로젝트', 'ㅂㅂㅂ', 'ttt'),
  createData(6, 'A123-123AA', '유지보수', 'ㅍㅍㅍ', 'aaa'),
  createData(7, 'A123-123AA', '유지보수', 'ㄱㄱㄱ', 'sss'),
  createData(8, 'A123-123AA', '프로젝트', 'ㄴㄴㄴ', 'ddd'),
  createData(9, 'A123-123AA', '유지보수', 'ㄷㄷㄷ', 'fff'),
  createData(10, 'A123-123AA', '프로젝트', 'ㅊㅊㅊ', 'zzz'),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650, width: '80%' }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell align="center"><b>코드</b></TableCell>
            <TableCell align="center"><b>유형</b></TableCell>
            <TableCell align="center"><b>프로젝트명</b></TableCell>
            <TableCell align="center"><b>담당자</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.num}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.num}
              </TableCell>
              <TableCell align="center">{row.code}</TableCell>
              <TableCell align="center">
                {
                row.category === '프로젝트' ? <Chip label={row.category} size="small" color="error" variant="outlined" /> : <Chip label={row.category} size="small" color="primary" variant="outlined" />
                }
              </TableCell>
              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="center">{row.responsibility}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
