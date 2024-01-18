import  React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { useNavigate } from 'react-router-dom';

export default function BlogCard({ele}) {
    const navigate = useNavigate();
    const handalStorData = (ele) => {
        localStorage.setItem('blog' , JSON.stringify(ele))
        navigate(ele._id)
    }
    const birthday5 = new Date(Number(ele.Date))
    return (
        <Card sx={{ width: '100%'  , height : '22rem'}}>
        <div className='imgcont'>
            <CardMedia
                component="img"
                alt="green iguana"
                height="180"
                image={`/src/uploads/${ele.ImageName}`} 
            />
            <div className='d-flex align-items-center disCrep w-100 p-2 justify-content-between'>
                <h1 style={{color : 'aliceblue' , fontSize  :'1rem'}}>{birthday5.toDateString()}</h1>
                <p style={{color : 'aliceblue' , fontSize  :'1rem'}}>{ele.Catergory}</p>
            </div>
        </div>
        <CardContent>
            <Typography gutterBottom variant="h6">
            {ele.Title}
            </Typography>
        </CardContent>
        <CardActions>
            <button className='btn' onClick={() => handalStorData(ele)} style={{
                fontSize : '1rem' , 
                color : '#000',
            }}>Read More <ArrowOutwardIcon style={{marginLeft : '.6rem' , fontSize : '1rem'}} /> </button>
        </CardActions>
        </Card>
    );
}
