import React from 'react'
import { Container } from 'react-bootstrap'

const FooterComp = () => {
    return (<>
        <footer className='pt-5'>
            <Container>
                <div className="row">
                    <div className="col-lg-6" style={{height : '10rem'}}>
                        <div className="d-flex 
                        align-items-left 
                        justify-content-center 
                        flex-column
                        h-100
                        ">
                            <h2 className='fs-4'>Ready to grow your business</h2>
                            <p className='fs-6'>Join over 4,000+ startups already growing with Unitiled.</p>
                        </div>
                    </div>
                    <div className="col-lg-6" style={{height : '10rem'}}>
                        <div className="d-flex align-items-center justify-content-end h-100">
                            <form action="" className='border rounded-5' 
                            style={{
                                height : '3rem',
                                overflow : 'hidden'
                            }}>
                                <input type="text" className='border-0 fs-6 h-100' 
                                style={{
                                    outline : 'none',
                                    marginLeft : '.7rem'
                                }} placeholder='Enter you email' />
                                <button className='btn bgBtn rounded-5 h-100' style={{
                                    color : '#fff',
                                    marginTop : '-.3rem'
                                }}>Subscribe</button>
                            </form>
                        </div>
                    </div>
                    <div className="col-12 ">
                        <div className="d-flex align-items-center justify-content-center">
                            <h4 className='fs-6'>@2024 Unititled UI All rights reserved.</h4>
                        </div>
                    <br />
                    <br />
                    </div>
                </div>

            </Container>
        </footer>
    </>)
}

export default FooterComp