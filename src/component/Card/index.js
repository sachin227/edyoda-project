import moment from 'moment';
import React from 'react';
import './Card.css'
const style={
    color:"#84D9FF",
    
}
const para={
    textAlign:'left',
    display:'-webkit-box',
    webkitLineClamp:'4',
    webkitBoxOrient:'vertical',
    overflow:'hidden',
    marginTop:'-18px',
    opacity: '.5',
   
    
    fontSize:'14px' ,
    fontWeight: '400',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight:' 1.43',
    letterSpacing:' .35px',
    textAlign: 'left',
    color: '#000',
    margin:'.3em 0',
    whiteSpace: 'pre-wrap'

    
}
const title={
 
    fontStyle: 'normal',
    fontStretch: 'normal',
    letterSpacing: 'normal',
    textAlign: 'left',
    display:'-webkit-box',
    webkitLineClamp:'2',
    webkitBoxOrient:'vertical',
    overflow:'hidden',
   
    
}
const paradetail={
    padding:'0px 20px',
    marginTop: '-12px',
    marginBottom:"25px"
}
const autordate = {
marginTop:'-12px',
}
const Card = (props) => {
   
   
    return ( 
<div classname="blog" style={{border: "1px solid #90D9FF",borderRadius:'5px',width:"31.33%",boxSizing:"border-box",backgroundColor:"white" ,margin:"5px 5px"}}>
   <img style={{padding:'0',margin:'0',boxSizing:"border-box",minHeight:'180px',borderTopLeftRadius:'5px',borderTopRightRadius:'5px',}} width="100%" src={props.img} alt=""/>
     <div classname="card-details" style={paradetail}>
        <h3 style={title}>{props.title}</h3>
        <h5 style={autordate}><span className="author" style={style} >{props.author} </span>| {moment(props.date).format("DD MMM YYYY")} </h5>
        <p style={para}>{props.desc}</p>
    </div>
</div>


   

      
    





       )
}
 
export default Card;