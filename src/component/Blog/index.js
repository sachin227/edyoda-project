import React from 'react';
import './blog.css'

const Blog = (props) => {
    return ( <div className="blog">
     <h3>{props.heading}</h3>
     <p className="para">{props.para}</p>
    </div> );
}
 
export default Blog;