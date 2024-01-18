import React from 'react'
import './HomHeroComp.css'
import '../HeaderFold/HeaderComp.css'
import { Container } from 'react-bootstrap'
import { Button } from '@mui/material'
import BlogsComp from '../BlogsFold/BlogsComp'

const HomeHeroComp = () => {
    return (<>
        <section className='hero '>
            <Container className='h-100' style={{height : '20rem'}}>
                <div className="row h-100">
                <div className="col-lg-6">
                    <div 
                    className='d-flex  w-100 h-100 align-items-left  flex-column justify-content-center'>
                        <h1>Unititled Blog</h1>
                        <form action="" 
                        className=' d-flex border-1 mt-1 w-75 theSubscribFrom rounded-5' 
                        style={{backgroundColor : 'white'}}>
                            <input type="email" className='h-100 w-75 border-0 textInput'/>
                            <Button variant='contained' className=' w-50 rounded-5 bgBtn' 
                            style={{marginTop : '0rem' , boxShadow : 'none'}}>Subscribe</Button>
                        </form>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="w-100 h-100 d-flex align-items-center justify-content-end">
                        <p className='thisPrera'>New product featuers , the latest in technology , solutions , and updates.</p>
                    </div>
                </div>
                </div>
                <BlogsComp/>
                
            </Container>
        </section>
    </>)
}

export default HomeHeroComp