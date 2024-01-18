import React from 'react'
import logo from '../assets/logo.png'

const LoadingComp = () => {
    return (<>
        <section 
            className='d-flex align-items-center 
            justify-content-center flex-column gap-2'
            style={{
                height : '100vh',
                width : '100%'
            }}
        >
            <img src={logo} alt="" />
            <p className='fs-4'>Loading...</p>
        </section>
    </>)
}

export default LoadingComp