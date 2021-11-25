import React from 'react'
import PropTypes from 'prop-types'

const PostList = props => {
    const {posts} = props;
    return (
        <div>
           <ul className="post-list">
               {posts.map(post =>(
                    <li key={post.id}>{post.title}</li> 
               ))}
                 
            </ul> 
        </div>
    )
}

PostList.propTypes = {
    posts: PropTypes.array.isRequired
}

export default PostList
