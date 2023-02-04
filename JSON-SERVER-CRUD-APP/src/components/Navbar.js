import React from 'react'
import { AppBar, Toolbar, styled } from '@mui/material'
import { NavLink } from 'react-router-dom'

const Header = styled(AppBar)`
    background:#111111;
`
const Tabs = styled(NavLink)`
    font-size:20px;
    margin-right:20px;
    text-decoration :none;
    color:#fff;
`
const Navbar = () => {
    return (
        <Header position='static'>
            <Toolbar>
                <Tabs to='/'>Add User</Tabs>
                <Tabs to='/all'>All Users</Tabs>
            </Toolbar>
        </Header>
    )
}

export default Navbar