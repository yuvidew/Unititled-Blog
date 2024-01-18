import React from 'react'
import logo from '../assets/logo.png'
import { Button, Grid } from '@mui/material'
import './HeaderComp.css'
import { NavLink } from 'react-router-dom'
import UserTagComp from './UserTagComp'

const HeaderComp = () => {
    return (<>
        <header>
            <div className=' container'>
            <br />
            <Grid container spacing={3} className=''>
                <Grid item xs = {6} >
                    <NavLink to={'/'} style={{textDecoration : 'none' , color : '#000'}} className="d-flex align-items-center gap-2">
                        <img className=' object-fit-cover logoImg' src={logo} alt="" />
                    </NavLink>
                </Grid>
                <Grid item xs = {6}>
                    <div className="d-flex align-items-center justify-content-end gap-3">
                        {localStorage.getItem('unit-BlogUser') 
                        ? 
                        <>
                            <UserTagComp/>
                        </> :
                        <>
                            <NavLink to={'/login'}>
                                <Button variant='text' className=' rounded-5 textBtn'>Log in</Button>
                            </NavLink>
                            <NavLink to={'/signup'}>
                                <Button variant='contained' className=' rounded-5 bgBtn'>Sign up</Button>
                            </NavLink>
                        </>
                        }
                    </div>
                </Grid>
            </Grid>
            <br />
            </div>
        </header>
    </>)
}

export default HeaderComp