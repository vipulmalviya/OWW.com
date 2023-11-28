import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App.tsx'
import './style.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Home from './pages/Home.tsx';
import Case from './pages/Case.tsx';
import Contact from './pages/Contact.tsx';
import CaseWork from './pages/CaseWork.tsx';
import Blog from './pages/Blog.tsx';
import Post from './pages/Post.tsx';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} >
      <Route path="" element={<Home />} />
      <Route path="Case" element={<Case />} />
      <Route path="CaseWork/:category/:id" element={<CaseWork />} />
      <Route path="Contact" element={<Contact />} />
      <Route path="Blog" element={<Blog />} />
      <Route
        path="/blogs/:id"
        element={<Post />}
        loader={({ params }) => fetch(`http://localhost:5000/blogs/${params.id}`)}
      />

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)




