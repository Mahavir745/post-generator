import React, { createContext, useCallback, useEffect, useReducer, useState } from 'react'

export const PostListContent = createContext(
  {
    postlist: [],
    addPostList: ()=>{},
    fetching : false,
    deletePost: ()=>{}
  }
);

const postListReducer = (currPostList,action)=>{

  let newPostList = currPostList;
  if(action.type === "ADD_POST"){
    newPostList = [
      action.payload,...currPostList
    ]
  }
  else if (action.type === "ADD_INITIAL_POST") {
    newPostList = action.payload.posts;
  }  
  else if(action.type === "DELETE_POST"){
    newPostList = currPostList.filter(post => post.id !== action.payload.id)
  }
  return newPostList
}

const PostListProvider = ({children}) => {
  const [postlist, dispatchPostLIst] = useReducer(postListReducer,[]);
  const [fetching,setFetching] = useState(false)


  const addPostList = (id,userId,title,body,views,tags)=>{
    dispatchPostLIst({
      type: 'ADD_POST',
      payload: {
        id,userId,title,body,views,tags
      }
    })
  };

  const addInitialPostList = (posts)=>{
    dispatchPostLIst({
      type: 'ADD_INITIAL_POST',
      payload: {
        posts,
      }
    })
  };

  const deletePost = useCallback((id)=>{
    dispatchPostLIst({
      type: "DELETE_POST",
      payload: {
        id
      }
    })
  }, [dispatchPostLIst]);


  useEffect(()=>{
    const controller = new AbortController();
    const signal = controller.signal;

    setFetching(true)
      fetch('https://dummyjson.com/posts' , {signal})
        .then((res) => res.json())
        .then((data) => {
          addInitialPostList(data.posts);
          setFetching(false)
        });
        
        return (
          ()=>{
            controller.abort()
          }
        )
  },[])

  return (
    <PostListContent.Provider value={
      {     
      postlist,
      addPostList,
      fetching,
      deletePost
      }
    }>
      {children}
    </PostListContent.Provider>
  )
}

export default PostListProvider