import React, { useState } from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { NavLink } from 'react-router-dom';

const UserTagComp = () => {
    const [hideShow , setHideShow] = useState(false)

    const handalRemoveUserInfo = () => {
        localStorage.removeItem('unit-BlogAuth')
        localStorage.removeItem('unit-BlogUser')
        window.location.reload()
    }

    return (<>
        <div 
        className="border p-2 d-flex align-items-center justify-content-center gap-2 rounded-5" 
        style={{width : '6rem'}}>
            <AccountCircleIcon sx={{cursor : 'pointer'}}/>

                <MenuIcon sx={{cursor : 'pointer'}} onClick = {() => setHideShow(!hideShow)} />
        </div>
        <ul style={{
            position : 'absolute' , 
            transition : 'all .5s ease-in-out',
            width : '15rem',
            borderRadius : '.5rem',
            listStyle : 'none'
            }} 
        className={ !hideShow ? 'd-none card theCard'  : 'd-block card theCard' }>
            <NavLink to={'/createBlog'}
            className='d-flex align-items-center gap-3 w-100 p-2'
            style={{textDecoration : 'none' , color : 'black'}}
            >
                <AddIcon />
                <h5 className='fs-6 mt-2'  onClick = {() => setHideShow(!hideShow)} >Create Blog</h5>
            </NavLink>
            <li 
            className='d-flex align-items-center gap-3 w-100 p-2'
            onClick={handalRemoveUserInfo}
            style={{cursor : 'pointer'}}
            >
                <PowerSettingsNewIcon  />
                <h5 className='fs-6 mt-2' >Logout</h5>
            </li>
        </ul>
    </>)
}

export default UserTagComp