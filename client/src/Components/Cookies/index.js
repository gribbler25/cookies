import React from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import chocolateChip from '../../assets/chocolateChip.jpg';
import { Typography } from '@mui/material';
// import { flexbox } from '@mui/system';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 10,
    p: 4,
};

function createData(
    name: string,
    describe: String,
    calories: number,
    fat: number,
    carbs: number,
    protein: number,
    cost: number
) {
    return { name, describe, calories, fat, carbs, protein, cost };
}

// function description(
//     describe: String,
// ) {
//     return { describe };
// }

const cookies = [
    createData('Chocolate Chip', 'Melt in your mouth delicious.', 198, 9, 28, 3, 26),
    createData('Oatmeal Raisin', 'description here', 218, 9, 32, 3, 30),
    createData('Gingersnaps', 'gingersnap description', 106, 3, 19, 1, 29)
];

function ProjectCookies() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    return (

        <div className="modal-title">
            {cookies.map((row) => (
                <Button onClick={handleOpen}>{row.name}</Button>
            ))}
                <Modal
                    open={open}
                    onClose={handleClose}
            >
            <Box sx={style}>
                <img src={chocolateChip} width="200px" height="200px" alt=""></img>

                <TableContainer>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Cookie</TableCell>
                                <TableCell align="right">Calories</TableCell>
                                <TableCell align="right">Fat&nbsp;(g)</TableCell>
                                <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                                <TableCell align="right">Protein&nbsp;(g)</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {cookies.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last=child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right">{row.calories}</TableCell>
                                    <TableCell align="right">{row.fat}</TableCell>
                                    <TableCell align="right">{row.carbs}</TableCell>
                                    <TableCell align="right">{row.protein}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <h3>Price: ${cookies[0].cost} / dozen</h3>
            </Box>
        </Modal>
        </div >
    )
}

export default ProjectCookies;