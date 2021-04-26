
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
const { Grid, TableCell } = require("@material-ui/core")
const { Link } = require("react-router-dom")

const Contacts = (props)=>{
    return (
        <Grid>
            <TableContainer component={Paper}>
                <Table  size="small" aria-label="a dense table">
                    <TableHead>
                    <TableRow>
                        <TableCell>First Name</TableCell>
                        <TableCell align="right">Last Name</TableCell>
                        <TableCell align="right">Email</TableCell>
                        <TableCell align="right">Phone Number</TableCell>
                        <TableCell align="right">Actions</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            props.data !== null?
                            props.data.map((row) => (
                                <TableRow key={row.id}>
                                  <TableCell component="th" scope="row">
                                    {row.firstName}
                                  </TableCell>
                                  <TableCell align="right">{row.lastName}</TableCell>
                                  <TableCell align="right">{row.email}</TableCell>
                                  <TableCell align="right">{row.phoneNumber}</TableCell>
                                  <TableCell align="right"><Link to={"edit/" + row.id}>Edit</Link></TableCell>
                                </TableRow>)) : ""
                        }        
                    </TableBody>
                </Table>
            </TableContainer>
        </Grid>
    )
}

export default Contacts;