import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

//style
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
//createBrowserRouter handles creating the routes
//RouterProvider helps the router handle nav

//Pages
import App from './App.tsx'
import NotFound from './pages/NotFound.tsx'


const router = createBrowserRouter([
  { path: "/", element: <App/> },
  { path: "*", element: <NotFound/> }/*,
  { path: "/home", element: <Home/> },
  { path: "/projects", element: <Projects/> },
  { path: "/about", element: <About/> },
  { path: "/contact", element: <Contact/> },
   */
]);// <== Uses address bar to manage nav

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
