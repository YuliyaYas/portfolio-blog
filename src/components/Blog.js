import React, { Component } from 'react';
import BlogPost from './BlogPost';

class Blog extends Component {
    constructor(){
      super()
      this.state = {
       
      }
    }

    componentDidMount(){
     
    }

    render() {
        const blogPosts = this.props.blog ? this.props.blog.map( post => {
            return <BlogPost key={post.title} title={post.title} imgSrc={post.mainImage.fields.file.url} imgTitle={post.mainImage.fields.title}/> 
        }) : ''

        return(
            <div className="blogContainer">
                {blogPosts}
            </div>
        )
    }
}

export default Blog;