import React, { useState } from 'react'
import './BlogComp.css'
import useFetch from '../CreateCustemHook/useFetch'
import BlogCard from './BlogCardComp'
import FooterComp from '../FooterFold/FooterComp'

const BlogsComp = () => {
    const {data} = useFetch('http://localhost:2000/api/blogs')
    const FilterBtnText = [
        'View all',
        'Design',
        'Product',
        'Development',
        'LeaderShip',
        'Menegment',
        'Interview',
        'Customer Support',
    ]
    const [tabs , setTabs] = useState('View all')
    console.log(data);
    return (<>
        <section className=''>
            <ul className='d-flex align-items-center gap-3 border-bottom thescrol' style={{listStyle :  'none' , paddingLeft : "0" , overflowX : 'scroll'}}>
                {FilterBtnText.map((ele , index) => (
                    <li key={index} onClick={() => setTabs(ele)} className='theTabList ' style={{cursor : 'pointer'}}>
                        <p className='tabs' id ={ele === 'Customer Support' && 'last'} style={{color : ele === tabs &&  'black'}}>{ele}</p>
                        <span className={ele === tabs && 'border-Btom d-block w-100'}></span>
                    </li>
                ))}
            </ul>
            {!data.length && <h1 className='text-center loader mt-5' style={{color : '#000'}}>Loading...</h1>}
            <div className="row">
                {data.map((ele , index) => (
                    <div className={tabs === 'View all'|| tabs === ele.Catergory ? "col-lg-4 mb-4" : 'd-none'} key={index}>
                        <BlogCard ele = {ele} />
                    </div>
                ))}
            </div>
        </section>
        <FooterComp/>
    </>)
}

export default BlogsComp