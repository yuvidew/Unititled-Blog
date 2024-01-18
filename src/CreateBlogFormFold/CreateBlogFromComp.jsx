import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/react-quill'
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';

import './CreateBlogFrom.css'

const CreateBlogFromComp = () => {
    const [title , setTitle] = useState('')
    const [catergory , setCategory] = useState('')
    const [discription , setDiscription] = useState('') 
    const [image , setImage] = useState(null)


    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('title' , title)
        formData.append('catergory' , catergory)
        formData.append('image' , image)
        formData.append('discription' , discription)
        formData.append('userId' , discription)
        handalNewBlogCreateForm(formData)
    }

    const handalNewBlogCreateForm = async (formData) => {
        try {
            const res = await axios.post('http://localhost:2000/api/createblog', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
            if(res.data){ 
                alert('ok')
                setTitle('')
                setCategory('')
                setDiscription('')
                setImage(null)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const FilterBtnText = [
        'Design',
        'Product',
        'Development',
        'Customer Support',
        'LeaderShip',
        'Menegment',
        'Interview'
    ]

    const modules = {
        toolbar: [
            [{ 'header': [1, 2, 3, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote' ],
            [{ 'list': 'ordered' }, { 'list': 'bullet' },
            { 'indent': '-1' }, { 'indent': '+1' }],
            ['clean'],
            ['align', 'direction'],
            [{ align: '' }, { align: 'center' }, { align: 'right' }, { align: 'justify' }],
            [{ 'color': [] }, { 'background': [] }] 
        ]
    };
        
    const formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image', 'video',
    'align', 'direction',
    'color', 'background',
    ];

    return (<>
    <div className="container pt-3">
        <section className='d-flex align-items-center justify-content-center'>
            <form action="" onSubmit={handleSubmit} className='createBlogForm mb-5'>
            <h1 className='text-center theHEading mb-5'>Create New Blog</h1>
                <div>
                    <label htmlFor="title" className='w-100 title '>Title <span>*</span></label>
                    <input 
                        type="text" 
                        className='w-100 border' 
                        placeholder='Title' 
                        id='title' 
                        onChange={(e) => setTitle(e.target.value)}  
                        value={title}   
                        required 
                    />
                </div>
                <div className='mt-4'>
                    <label htmlFor="image" className='w-100 title '>Upload image <span>*</span></label>
                    <input 
                    required 
                    className='border w-100'
                        type="file" 
                        accept='*/image' 
                        onChange={(e) => setImage(e.target.files[0])} />
                </div>
                <h5 className='mt-4 title'>Choose Blog Category <span>*</span></h5>
                <div className='row '>
                    {FilterBtnText.map((ele , index) => (
                        <div className="col-lg-4 col-md-4 p-2" key={index}>
                            <label htmlFor={ele} 
                            className="rounded-3 p-2 border gap-3 w-100 d-flex align-items-center brd"
                            style={{cursor : 'pointer'}}
                            >
                                <input required  type="radio" style={{
                                    marginTop : '-.1rem' , 
                                    marginLeft : '.5rem' , 
                                    accentColor : 'black'
                                }}
                                id={ele} name={'category'} value={catergory}  onClick={() => setCategory(ele)}  />
                                <p className='w-100 fs-6' style={{marginTop : '.7rem'}}>{ele}</p>
                            </label>
                        </div>
                    ))}
                </div>

                <div className='mb-4 mt-4 theDescriptionBox'>
                    <h5 className='mt-3 title'>Description <span>*</span></h5>
                    <ReactQuill
                        theme="snow"
                        modules={modules}
                        formats={formats}
                        style={{
                            display : 'block',
                            height : '75%',
                            cursor : 'text',
                        }}

                        onChange={(html) => setDiscription(html)}  
                        value={discription}  
                    >
                        {/* {theSaveFile && <div dangerouslySetInnerHTML={{ __html: theSaveFile }} />} */}
                    </ReactQuill>
                </div>
                <button className='w-25 bgBtn rounded-5 fs-5 ' style={{color : 'aliceblue'}}> Submit</button>
            </form>
        </section>
    </div>
    </>)
}

export default CreateBlogFromComp