import { FormControl, FormGroup, Input, InputLabel, Typography, styled, Button } from '@mui/material'
import React, {useState} from 'react'
import { addUser } from '../services/api'
import { useNavigate } from 'react-router-dom'


const Container = styled(FormGroup)`
     width:50%;
     margin: 5% auto 0 auto;
     & > div {
        margin: 20px 0 0 0;
     }
`
const defaultValue = {
    name: '',
    username: '',
    email: '',
    phone: ''
}

const AddUser = () => {

    const [user,setUser] = useState(defaultValue)

    const navigate = useNavigate()

    const onValueChange = (e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }

    const addUserDetails = async()=>{
       await addUser(user)
       navigate('/all')
    }

  return (
    <Container>
        <Typography variant='h4' style={{textAlign:'center', margin:'10px'}}>Add User</Typography>
        <FormControl>
            <InputLabel>Name</InputLabel>
            <Input type='text' name='name' onChange={(e)=>onValueChange(e)} />
        </FormControl>
        <FormControl>
            <InputLabel>Username</InputLabel>
            <Input type='text' name='username' onChange={(e)=>onValueChange(e)} />
        </FormControl>
        <FormControl>
            <InputLabel>Email</InputLabel>
            <Input type='email' name='email' onChange={(e)=>onValueChange(e)} />
        </FormControl>
        <FormControl>
            <InputLabel>Phone</InputLabel>
            <Input type='number' name='phone' onChange={(e)=>onValueChange(e)} />
        </FormControl>
        <FormControl>
            <Button disabled={!user.name || !user.username || !user.email || !user.phone} variant='contained' onClick={()=>addUserDetails()}>Add User</Button>
        </FormControl>
    </Container>
  )
}

export default AddUser