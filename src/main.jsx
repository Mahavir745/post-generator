import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './route/App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PostList from './component/PostList.jsx'
import CreatePost from './component/CreatePost.jsx'
import Entertainment from './component/Entertainment.jsx'
import Contact_info from './component/Contact_info.jsx'

const route = createBrowserRouter([
  {
  path: "/",
  element:<App/>,
  children: [
  {path: "/",element:<PostList/>},
  {path: "/create-post",element: <CreatePost/>},
  {path: "/entertainment",element: <Entertainment/>},
  {path: '/info',element: <Contact_info/>}
  ]}

])
createRoot(document.getElementById('root')).render(

  <StrictMode>
    <RouterProvider router={route}/>
  </StrictMode>,
)
