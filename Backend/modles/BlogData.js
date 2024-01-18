const mongoose  = require('mongoose')

const BlogDataSchema = new mongoose.Schema({
    Title : String,
    Catergory : String,
    ImagePath : String,
    ImageName : String,
    Discription : String,
    Date : String,
})

const BlogData = mongoose.model('blogdata' , BlogDataSchema)

module.exports = BlogData