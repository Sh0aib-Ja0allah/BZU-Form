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

  interface User {
    name: string;
    email: string;
    phone: string;
    organization: string;
    position: string;
    city: string;
  }

  const [users, setUsers] = useState<User[]>([])
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [organization, setOrganization] = useState('')
  const [position, setPosition] = useState('')
  const [city, setCity] = useState('')
  const [open,setOpen] = useState(false)
  const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'error'>('success')
  const [snackbarMessage, setSnackbarMessage] = useState('Your data was successfully submitted.')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // trim() method used to remove the spaces from a string.
    if (
      name.trim() === '' ||
      email.trim() === '' ||
      phone.trim() === '' ||
      organization.trim() === '' ||
      position.trim() === '' ||
      city.trim() === ''
    ) {
      setSnackbarSeverity('error')
      setSnackbarMessage('Please fill in all the form fields.')
    }else{
      axios
      .post('iconnect api link', {
          name: name,
          email: email,
          phone: phone,
          organization: organization,
          position: position,
          city: city,
      })
      .then((res) => {
          setUsers((PrevUsers) => [res.data, ...PrevUsers])
          setName('')
          setEmail('')
          setPhone('')
          setOrganization('')
          setPosition('')
          setCity('')
          setSnackbarSeverity('success')
          setSnackbarMessage('Your data was successfully submitted.')
      })
      .catch((err) => {
          console.log(err.message)
          setSnackbarSeverity('error')
          setSnackbarMessage('An error occurred. Please try again later.')
      })
    }
    setOpen(true)
 } // end handleSubmit function.

  // close Snackbar function.
  const handleClose = (
    event?: React.SyntheticEvent | Event, 
    reason?: string
  ) => {
    if(reason === 'clickaway'){
      return
    }
    setOpen(false)
  }

  return (
    <div className="FormComponent">
      {/* BZU header logo. */}
      <div className="headerImage">
        <img className='headerLogo' src={headerLogo} alt="Birzeit University header logo" />
      </div>
      <form action="" className="Form" onSubmit={handleSubmit}>
        <TextField sx={{width: '350px', my: '15px'}} onChange={(e) => setName(e.target.value)} value={name} name='name' type='text' color='success' label='Your Full name' required />
        <TextField 
          sx={{width: '350px', my: '15px'}} 
          onChange={(e) => setEmail(e.target.value)} value={email} 
          inputProps={{pattern: '[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$',}} 
          name='email' type='email' color='success' label='Your Email' required />
        <TextField sx={{width: '350px', my: '15px'}} onChange={(e) => setPhone(e.target.value)} value={phone} name='phone' type='number' color='success' label='Your phone number' required />
        <TextField sx={{width: '350px', my: '15px'}} onChange={(e) => setOrganization(e.target.value)} value={organization} name='organization' type='text' color='success' label='Organization' required />
        <TextField sx={{width: '350px', my: '15px'}} onChange={(e) => setPosition(e.target.value)} value={position} name='position' type='text' color='success' label='Your position' required />
        <TextField sx={{width: '350px', my: '15px'}} onChange={(e) => setCity(e.target.value)} value={city} name='city' type='text' color='success' label='City' required />
        <Button onClick={() => setOpen(true)} 
        type='submit' variant='contained' size='large'
        sx={{my: '15px'}}>
          Submit
        </Button>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} >
          <Alert onClose={handleClose} severity={snackbarSeverity} >
            {snackbarMessage}
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
