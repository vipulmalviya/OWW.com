import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App.tsx'
import './style.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import Case from './pages/Case.tsx';
import Contact from './pages/Contact.tsx';




const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} >
      <Route path="" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Case" element={<Case />} />
      <Route path="/Contact" element={<Contact />} />
    </Route>
  )
)



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)




