import React from 'react'
import { Container } from 'react-bootstrap'

const BlogPage = () => {
    const blogData = JSON.parse(localStorage.getItem('blog'))
    const date = new Date(Number(blogData.Date))
    return (<>
        <section className={blogData ? '' : 'd-none'}>
            <Container>
                <div className="imagSRc">
                    <img 
                    src = {`/src/uploads/${blogData.ImageName}`}  
                    className='w-100 h-100 object-fit-cover'
                    alt="" />
                </div>
                <div className='d-flex align-items-center gap-3 mt-4'>
                    <h5>Date : <p>{date.toDateString()}</p></h5>
                </div>
                <h2 className='mt-4 mb-5'>{blogData.Title}</h2>
                <div className='theCont' dangerouslySetInnerHTML={{ __html: blogData.Discription }} />
            </Container>
        </section>
    </>)
}

export default BlogPage