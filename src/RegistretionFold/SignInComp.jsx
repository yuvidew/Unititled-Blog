import React from 'react'
import './Registretion.css'
import { NavLink, useNavigate } from 'react-router-dom'
import {useForm} from 'react-hook-form'
import { useSnackbar } from 'notistack'
import axios from 'axios'

const SignInComp = () => {
    const {register , handleSubmit , formState : {errors}} = useForm();
    const {enqueueSnackbar} = useSnackbar()
    const history = useNavigate()
    const onSubmit = (data) => {
        handleSignup(data);
    }

    const handleSignup = async(data) => {
        try {
            const res = await axios.post('http://localhost:2000/api/signup' , data)
            if(res.status === 200){
                enqueueSnackbar('Registed successfully', { variant: 'success' });
                history('/login')
            }else{
                enqueueSnackbar('This Email id is already exists', { variant: 'error' });
            }
        } catch (error) {
            if(error){
                enqueueSnackbar('SameThink is worng from the front-end', { variant: 'error' });
            }
        }
    }

    return (<>
        <section className='d-flex align-items-center justify-content-center' style={{
            height : '30rem'
        }}>
            <form className='LoginRegistrationForm' onSubmit={handleSubmit(onSubmit)}>
                <h1 className='text-center fs-4'>Create New Account</h1>
                <input 
                    type="name" 
                    placeholder='Enter your username...' 
                    className='w-100 inputText rounded-5 ' 
                    {...register('username' , {required : true})}
                />
                <input 
                    type="email" 
                    placeholder='Enter your email id...' 
                    className='w-100 inputText rounded-5 ' 
                    {...register('emailId' , {required : true})}
                />
                <input 
                    type="password" 
                    placeholder='Enter your password...' 
                    className='w-100 inputText rounded-5 ' 
                    {...register('password' , {required : true})}
                />
                <br />
                <br />
                <p className='text-center theCreateList'>Already Regesterd  
                    <NavLink to={'/login'} style={{marginLeft : '.6rem'}}>Log In</NavLink>
                </p>
                <button className='w-100 btn btn-primary bgBtn rounded-5 border-0 p-2' >Sign In</button>
            </form>
        </section>
    </>)
}

export default SignInComp