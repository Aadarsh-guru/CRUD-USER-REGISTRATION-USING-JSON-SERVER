import { Table, TableBody, TableCell, TableHead, TableRow, styled, Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { getUsers, deleteUser } from '../services/api'
import { Link } from 'react-router-dom'


const StyledTable = styled(Table)`
    width:90%;
    margin: 50px auto 0 auto;
`
const Thead = styled(TableRow)`
    background:#000;
    & > th {
        color: #fff;
        font-size: 20px;
    }
`
const Tbody = styled(TableRow)`
    & > td {
        font-size:20px;
    }
`

const AllUsers = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        getAllUsers()
    }, [])

    const getAllUsers = async () => {
        const response = await getUsers()
        setUsers(response.data)
    }

    const deleteUserDetails = async (id) => {
        await deleteUser(id)
        getAllUsers()
    }

    return (
        <StyledTable>
            <TableHead>
                <Thead>
                    <TableCell>No.</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell></TableCell>
                </Thead>
            </TableHead>
            <TableBody>
                {
                    users.map(user => {
                        return <Tbody key={user.id}>
                            <TableCell>{users.indexOf(user) + 1}</TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.username}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.phone}</TableCell>
                            <TableCell>
                                <Button variant='contained' style={{ marginRight: 10 }} component={Link} to={`/edit/${user.id}`} >Edit</Button>
                                <Button variant='contained' color='secondary' onClick={() => deleteUserDetails(user.id)} >Delete</Button>
                            </TableCell>
                        </Tbody>
                    })
                }
            </TableBody>
        </StyledTable>
    )
}

export default AllUsers