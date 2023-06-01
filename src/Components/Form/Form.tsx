// Material UI components that used in this component. 
import { TextField, Button, Snackbar, Alert } from '@mui/material'
import React, {useState} from 'react'
// Calling the CSS file for Form.tsx component.
import './Form.css'
// th BZU logo.
import headerLogo from "../assets/logo.png"
//axios is used to fetch and post api data.
import axios from 'axios'

function Form() {

  const [users, setUsers] = useState([])

  const changeHandler = ( e: any) => {

  }

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios
//        .post('iconnect api link', {
//           name: name,
//           email: email,
//           phone: phone,
//           organization: organization,
//           position: position,
//           city: city,
//           
//        })
//        .then((res) => {
//           setUsers((users) => [res.data, ...users]);
//           setName('');
//           setEmail('');
//           setPhone('');
//           setOrganization('');
//           setPosition('');
//           setCity('');
//        })
//        .catch((err) => {
//           console.log(err.message);
//        });
//  };

  const [open,setOpen] = useState(false)

  const handleClose = (event?: React.SyntheticEvent | Event,reason?: string) => {
    if(reason === 'clickaway'){
      return
    }
  }

  return (
    <div className="FormComponent">
      <div className="headerImage">
        <img className='headerLogo' src={headerLogo} alt="Birzeit University header logo" />
      </div>
      <form action="" className="Form">
        <TextField onChange={changeHandler} sx={{width: '350px', my: '15px'}} name='name' type='text' color='success' label='Your Full name' />
        <TextField onChange={changeHandler} sx={{width: '350px', my: '15px'}} name='email' type='email' color='success' label='Your Email' />
        <TextField onChange={changeHandler} sx={{width: '350px', my: '15px'}} name='phone' type='number' color='success' label='Your phone number' />
        <TextField onChange={changeHandler} sx={{width: '350px', my: '15px'}} name='organization' type='text' color='success' label='Organization' />
        <TextField onChange={changeHandler} sx={{width: '350px', my: '15px'}} name='position' type='text' color='success' label='Your position' />
        <TextField onChange={changeHandler} sx={{width: '350px', my: '15px'}} name='city' type='text' color='success' label='City' />
        <Button onClick={() => setOpen(true)} 
        type='submit' variant='contained' size='large'
        sx={{my: '15px'}}>
          Submit
        </Button>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} >
          <Alert onClose={handleClose} severity='success' >
            Your data is successfully submitted.
          </Alert>
        </Snackbar>
      </form>
    </div>
  )
}

export default Form


// icons library:
// npm install @mui/icons-material @mui/material @emotion/styled @emotion/react

// Material UI:
// npm install @mui/material @emotion/react @emotion/styled

// Axios library:
// npm install axios