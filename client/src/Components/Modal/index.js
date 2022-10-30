import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Box from '@mui/material/Box';

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

export default function CookieModal(props) {
    const cookies = props.cookies;
    // console.log(props);
    // console.log(cookies);

    return (
        <div>
            <Box sx={style} className="modal-image">
                {cookies.map((cookie) => (
                    <div>
                        <img src={cookie.image}></img>
                        <h3>{cookie.description}</h3>
                    </div>
                ))}
                
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
            {cookies.map((cookie) => (
            
            // {cookies.filter(cookie => cookie.id).map(filteredCookie => (
                    <TableRow
                        key={cookie.id}
                        sx={{ '&:last=child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th" scope="row">
                            {cookie.name}
                        </TableCell>
                        <TableCell align="right">{cookie.calories}</TableCell>
                        <TableCell align="right">{cookie.fat}</TableCell>
                        <TableCell align="right">{cookie.carbs}</TableCell>
                        <TableCell align="right">{cookie.protein}</TableCell>
                    </TableRow>
                    ))}
                </TableBody>
                </Table>
                </TableContainer>
                {cookies.map((cookie) => (
                    <div>
                <button>Add To Cart</button>
                <h3>Price: ${cookie.price} / dozen cookies</h3>
                </div>
                ))}
                </Box>
                </div>
    )
}

// export default CookieModal;