import React, {useEffect, useState} from 'react'
import { Button } from '@mui/material'
import axios from 'axios'
// Material UI Table Imports
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
// Material UI Dialog Imports:
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
// Icons :
import DeleteIcon from '@mui/icons-material/Delete'

// axios.get('https://localhost:7030/api/User')

export default function BasicTable() {
  
  const [openDelete, setOpenDelete] = React.useState(false)
  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get('https://localhost:7030/api/User')
    .then(response => {
      console.log(response)
      setUsers(response.data)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])

  // Material UI Dialog methods:
  const handleClickOpenDelete = (id) => {
    setOpenDelete(true)
    axios.delete(`https://localhost:7030/api/User/${id}`)
    axios.get('https://localhost:7030/api/User')
  }

  const handleCloseDelete = () => {
    setOpenDelete(false)
  }

  return (
    <>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Phone</TableCell>
            <TableCell align="right">organization</TableCell>
            <TableCell align="right">Position</TableCell>
            <TableCell align="right">city</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
          users && users.length > 0 ?
          users.map((item) => (
            <TableRow
              key={item.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {item.name}
              </TableCell>
              <TableCell align="right">{item.email}</TableCell>
              <TableCell align="right">{item.phone}</TableCell>
              <TableCell align="right">{item.organization}</TableCell>
              <TableCell align="right">{item.position}</TableCell>
              <TableCell align="right">{item.city}</TableCell>
              <TableCell align="right">
                <Button onClick={() => handleClickOpenDelete(item.id)}><DeleteIcon /></Button>
              </TableCell>
            </TableRow>
          ))
          : 'There is no data.'
        }
        </TableBody>
      </Table>
    </TableContainer>
    <Dialog
        open={openDelete}
        onClose={handleCloseDelete}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Delete User?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Did you want to delete this user ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDelete}>Confirm</Button>
          <Button onClick={handleCloseDelete} autoFocus>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}