import React from 'react';
import '../stylesheet/Blog.css';

const BlogPost = (props) =>  {
  console.log(props.imgSrc)
      return(
          <div className="post"> 
              <h3>{props.title}</h3>
              {/* {props.post.body} */}
              <div className="left">
              <img className="postImg" id="home-img" src={props.imgSrc} alt={props.imgTitle} />
              </div>
              <div className="shortDesc">Lorem ipsum dolor sit amet, at explicari deseruisse vel, pri esse postulant et. Pri no tollit delenit, congue quaeque ea ius. </div> 

          </div>
      );
};

export default BlogPost;
