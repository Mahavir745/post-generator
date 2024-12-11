import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './route/App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PostList from './component/PostList.jsx'
import CreatePost from './component/CreatePost.jsx'


const route = createBrowserRouter([
  {
  path: "/",
  element:<App/>,
  children: [
  {path: "/",element:<PostList/>},
  {path: "/create-post",element: <CreatePost/>},
  ]}

])
createRoot(document.getElementById('root')).render(

  <StrictMode>
    <RouterProvider router={route}/>
  </StrictMode>,
)
