import React, { useContext, useRef } from 'react'
import { PostListContent } from '../store/PostListStore'
import { useNavigate } from 'react-router-dom'

const CreatePost = () => {

  const {addPostList} = useContext(PostListContent)
  const navigate = useNavigate()

  const userIdElement = useRef();
  const titleElement = useRef();
  const bodyElement = useRef();
  const viewsElement = useRef();
  const tagElement = useRef();

  function onSubmitBtn (event){

    event.preventDefault();
    const userId = userIdElement.current.value;
    const title = titleElement.current.value;
    const body = bodyElement.current.value;
    const views = viewsElement.current.value;
    let tag = tagElement.current.value;
    const id = Date.now()
    tag = tag.split(" ")

    userIdElement.current.value =""
    titleElement.current.value = ""
    bodyElement.current.value = ""
    viewsElement.current.value = ""
    tagElement.current.value = ""

    addPostList(id,userId,title,body,views,tag)
    navigate("/")
  }

  return (
    <form style={{width: "80%", margin: 40}} className='bg-secondary-subtle rounded p-3' onSubmit={onSubmitBtn}>
    <div className="mb-3">
      <label htmlFor="userId" className="form-label">User Id: </label>
      <input type="text" className="form-control" id="userId" placeholder='enter your id:' ref={userIdElement}/>
    </div>
    <div className="mb-3">
      <label htmlFor="title" className="form-label">Title</label>
      <input type="text" className="form-control" id="title" placeholder='Give your post title.' ref={titleElement}/>
    </div>
    <div className="mb-3">
      <label htmlFor="post" className="form-label">Post: </label>
      <textarea type="text" className="form-control" id="post" rows={5} style={{resize: "none"}} placeholder='Write your post here....' ref={bodyElement}/>
    </div>
    <div className="mb-3">
      <label htmlFor="views" className="form-label"> Reactions: </label>
      <input type="text" className="form-control" id="views" placeholder='How many reactions you have' ref={viewsElement}/>
    </div>
    <div className="mb-3">
      <label htmlFor="tag" className="form-label"> Tags: </label>
      <input type="text" className="form-control" id="tag" placeholder='Enter your tags' ref={tagElement}/>
    </div>

    <button type="submit" className="btn btn-primary">Submit</button>
  </form>
  )
}

export default CreatePost