const express = require('express');
const cors = require('cors')
const { default: mongoose } = require('mongoose');
const Jwt = require('jsonwebtoken')
const multer = require('multer')
const path = require('path')
const BlogData = require('./modles/BlogData')

const userInfo = require('./modles/userInfo');
const app = express()
const port = process.env.PORT || 2000;
const JWtKey = 'unititled-blog'

/**this is the middilware  */
app.use(express.json())
app.use(express.urlencoded({extended : false}))
app.use(cors({credentials:true, origin : 'http://localhost:5173'  }))
app.use('/uploads' , express.static(__dirname + 'uploads'))

/**mongoDb password  :- unititled-blog */

/**URL of data base :- mongodb+srv://yd00102:<password>@cluster0.dl8odul.mongodb.net/?retryWrites=true&w=majority */

/**connect node js and mondoDb  */

mongoose.connect('mongodb+srv://yd00102:unititled-blog@cluster0.dl8odul.mongodb.net/?retryWrites=true&w=majority')
.then(() => console.log('mongoDb is connected'))
.then(error => console.log(error))

// Multer storage configuration
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../src/uploads'); // Destination folder for uploaded files
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + path.extname(file.originalname)); // Unique file name (timestamp + original name)
    },
});

// Initialize Multer with configuration
const upload = multer({ storage: storage });

/**this api for create a new blog  */

app.post('/api/createblog' , upload.single('image') , async (req , res) => {
    const {title , catergory , discription} = req.body
    const {filename , path} = req.file
    try {
        const newBlog = new BlogData({
            Title : title,
            Catergory : catergory,
            ImagePath : path,
            ImageName : filename,
            Discription : discription,
            Date : Date.now()
        })

        const saved = await newBlog.save()
        if(saved) res.json('ok')
        console.log(newBlog);
    } catch (error) {
        res.json(error)
    }
})

/**this is the login api for check the user in registred or not */

app.post('/api/login' ,  async (req , res) => {
    const { emailId } = req.body
    try {
        const check = await userInfo.findOne({emailId : emailId})
        if(check){
            Jwt.sign({check} , JWtKey, (err , token) => {
                if(err) {
                    res.status(400).json('This Emaid Id is not exists in Database')
                }  
                res.send({check , auth : token})  
            })
        }
        
    } catch (error) {
        res.status(404).json(error)
    }
})

/**this is the sign in api  api for registre the user info.. */

app.post('/api/signup' ,  async (req , res) => {
    const {username , emailId , password} = req.body
    try {
        const result = await userInfo.create({
            userName : username,
            emailId : emailId,
            password : password,
        })

        if(!result) res.status(404).json('somthink is worng ')
        res.status(200).json('ok')
    } catch (error) {
        res.status(404).json(error)
    }
})


/**this is the get api for checking api is working or not  */

app.get('/api/get' , async (req , res) => {
    const userData = await userInfo.find()
    res.json(userData)
})

/**this the blog api for see the blogs  */
app.get('/api/blogs' , async (req , res) => {
    const userData = await BlogData.find()
    res.json(userData)
})


app.listen(port , () => {
    console.log(`Server is running on http://localhost:${port}`)
})