import React, { useContext } from 'react'
import { PostListContent } from '../store/PostListStore'

const Post = ({post}) => {

  const {deletePost} = useContext(PostListContent)
  return (
  <div className="card" style={{ width: "32rem", margin: "10px" }}>
    <div className="card-body">
      <h5 className="card-title">{post.title}</h5>
      <p className="card-text">
      {post.body}
      </p>
      <p className="card-text">
      {post.tags.map((tag)=>(
        <button key={tag} className='btn btn-info' style={{margin:"0px 0px 0px 4px"}}>{tag}</button>
      ))}
      </p>
      <p className="card-text bg-success-subtle p-1">
      {`Numbers of reaction ${post.views} in this post`}
      </p>
      <a href="#" className="btn btn-danger" onClick={()=> deletePost(post.id)}>
        Delete
      </a>
    </div>
  </div>
  )
}

export default Post