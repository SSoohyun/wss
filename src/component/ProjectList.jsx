import { Paper, Table, TableHead, TableBody, TableRow, TableCell, TableContainer, TablePagination, TableFooter, withStyles, Container } from '@mui/material';
import Chip from '@mui/material/Chip';
import { useState } from 'react';
import SearchBar from './SearchBar';
import useTable from './useTable';
import faker from "faker";
import { color } from '@mui/system';

// useTable component 사용..?
// table viewing까지 해보기
// pagenation 및 sorting은 추후 구현

// dummy data 선언
faker.locale = "ko";

const projects = Array(53)
  .fill()
  .map(() => ({
    id: faker.datatype.uuid(),
    code: faker.datatype.number(),
    category: faker.datatype.number()%2 === 0 ? "프로젝트" : "유지보수",
    name: faker.lorem.word(),
    responsibility: faker.name.lastName() + faker.name.firstName(),
}));

const headCells = [
    {id: '1', label: '#'},
    {id: '2', label: '코드'},
    {id: '3', label: '유형'},
    {id: '4', label: '프로젝트명'},
    {id: '5', label: '담당자'},
];


export default function ProjectList() {
    
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    }

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    }

    
    // 스타일
    const styles = {
        tablePos: {
            margin: "5% 5% 2% 5%",
        }
    }

    return (
        <>
            <SearchBar />
            <div style={styles.tablePos}>
                <TableContainer component={Paper}>
                    <Table size="middle">
                        <TableHead>
                            <TableRow sx={{
                                "& th": {
                                    backgroundColor: '#757de8',
                                }
                            }}>
                                {headCells.map((headCell) => (
                                    <TableCell key={headCell.id} align="center"><b>{headCell.label}</b></TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {projects 
                                .slice(page * rowsPerPage, (page + 1) * rowsPerPage)
                                .map((project, i) => (
                                <TableRow key={project.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell align="center" component="th" scope="row">
                                        {page * rowsPerPage + i + 1}
                                    </TableCell>
                                    <TableCell align="center">{project.code}</TableCell>
                                    <TableCell align="center">
                                        {
                                        project.category === "프로젝트" ? <Chip label={project.category} size="small"color="error" variant="outlined"/> : <Chip label={project.category} size="small" color="primary" variant="outlined" />
                                        }
                                    </TableCell>
                                    <TableCell align="center">{project.name}</TableCell>
                                    <TableCell align="center">{project.responsibility}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                        <TableFooter>
                            <TableRow>
                                <TablePagination
                                    count={projects.length}
                                    page={page}
                                    rowsPerPage={rowsPerPage}
                                    onPageChange={handleChangePage}
                                    onRowsPerPageChange={handleChangeRowsPerPage}
                                />      
                            </TableRow>
                        </TableFooter>
                    </Table>
                </TableContainer>
            </div>   
        </>
    )
}