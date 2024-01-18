import React from 'react'
import './Registretion.css'
import { NavLink, useNavigate } from 'react-router-dom'
import { useSnackbar } from 'notistack'
import { useForm } from 'react-hook-form';
import axios from 'axios';

const LoginComp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {enqueueSnackbar} = useSnackbar()
    const hisotry = useNavigate('')
    const onSubmit = (data) => {
        hadnlTheLogin(data)
    };

    const hadnlTheLogin = async(data) => {
        try {
            const res = await axios.post('http://localhost:2000/api/login' , data)
            if(res.data){
                localStorage.setItem('unit-BlogAuth' , res.data.auth)
                localStorage.setItem('unit-BlogUser' , res.data.check.userName)
                enqueueSnackbar('Welcome back', { variant: 'success' });
                hisotry('/')
                window.location.reload()
            }else{
                enqueueSnackbar('This Email id is already exists', { variant: 'error' });
            }
        } catch (error) {
            if(error){
                enqueueSnackbar('SameThink is worng from the Client', { variant: 'error' });
            }
        }
    }
    return (<>
        <section className='d-flex align-items-center justify-content-center' style={{
            height : '30rem'
        }}>
            <form className='LoginRegistrationForm' onSubmit={handleSubmit(onSubmit)}>
                <h1 className='text-center fs-4'>Log in to your account</h1>
                <input 
                    type="email" 
                    placeholder='Enter your email id...' 
                    className='w-100 inputText rounded-5 ' 
                    {...register('emailId', { required: true })} 
                />
                <input 
                    type="password" 
                    placeholder='Enter your password...' 
                    className='w-100 inputText rounded-5 ' 
                    {...register('password', { required: true })} 
                />
                <br />
                <br />
                <p className='text-center theCreateList'>Create a Account ? 
                    <NavLink to={'/signup'} style={{marginLeft : '.6rem'}}>Sign Up</NavLink>
                </p>
                <button className='w-100 btn btn-primary bgBtn rounded-5 border-0 p-2' >Log in </button>
            </form>
        </section>
    </>)
}

export default LoginComp