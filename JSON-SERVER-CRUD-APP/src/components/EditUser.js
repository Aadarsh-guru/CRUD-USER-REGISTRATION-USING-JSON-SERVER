import { FormControl, FormGroup, Input, InputLabel, Typography, styled, Button } from '@mui/material'
import React, {useState, useEffect} from 'react'
import { editUser, getUser } from '../services/api'
import { useNavigate, useParams } from 'react-router-dom'


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

const EditUser = () => {

    const [user,setUser] = useState(defaultValue)

    const navigate = useNavigate()
    const { id } = useParams()

    useEffect(() => { loadUserDetails()}, [])
    

    const loadUserDetails = async()=>{
        const response = await getUser(id)
        setUser(response.data)
    }

    const onValueChange = (e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }

    const editUserDetails = async()=>{
       await editUser(user,id)
       navigate('/all')
    }

  return (
    <Container>
        <Typography variant='h4'>Edit User</Typography>
        <FormControl>
            <InputLabel>Name</InputLabel>
            <Input type='text' name='name' onChange={(e)=>onValueChange(e)} value={user.name} />
        </FormControl>
        <FormControl>
            <InputLabel>Username</InputLabel>
            <Input type='text' name='username' onChange={(e)=>onValueChange(e)} value={user.username} />
        </FormControl>
        <FormControl>
            <InputLabel>Email</InputLabel>
            <Input type='email' name='email' onChange={(e)=>onValueChange(e)} value={user.email} />
        </FormControl>
        <FormControl>
            <InputLabel>Phone</InputLabel>
            <Input type='number' name='phone' onChange={(e)=>onValueChange(e)} value={user.phone} />
        </FormControl>
        <FormControl>
            <Button disabled={!user.name || !user.username || !user.email || !user.phone} variant='contained' onClick={()=>editUserDetails()}>Edit User</Button>
        </FormControl>
    </Container>
  )
}

export default EditUser