import { Paper, Table, TableHead, TableBody, TableRow, TableCell, TableContainer, TablePagination } from '@mui/material';
import Chip from '@mui/material/Chip';
import { useState } from 'react';
import SearchBar from './SearchBar';
import useTable from './useTable';
import faker from 'faker';


// useTable component 사용..?
// table viewing까지 해보기
// pagenation 및 sorting은 추후 구현

// dummy data 선언
faker.local = "ko";
faker.seed(123);

const projects = Array(53)
  .fill()
  .map(() => ({
    id: faker.random.uuid(),
    code: faker.lorem.word(5),
    category: faker.lorem.word(1),
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
    
    const pages = [5, 10, 25];
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(pages[page]);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    }

    const handleChangeRowsPerPage = event => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    }

    
    // 스타일
    const styles = {
        tablePos: {
            margin: "10% 5% 2% 5%",
        }
    }
    
    return (
        <>
            <SearchBar />
            <Paper style={styles.tablePos}>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                {headCells.map((headCell) => (
                                    <TableCell key={headCell.id} align="center"><b>{headCell.label}</b></TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {projects.map((project, i) => (
                                <TableRow key={project.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell align="center">{i+1}</TableCell>
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
                    </Table>
                </TableContainer>
                <TablePagination
                    component="div"
                    page={page}
                    rowsPerPageOptions={pages}
                    rowsPerPage={rowsPerPage}
                    count={projects.length}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
            </Paper>
        </>
    )
}