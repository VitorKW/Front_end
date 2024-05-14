import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import Product from './routes/products.jsx'
import ErrorPage from './routes/errorPage.jsx'
import Home from './routes/home.jsx'
import EditForm from './routes/EditForm.jsx'



const router = createBrowserRouter([
{
  path: '/',
  element: <App/>,
  errorElement: <ErrorPage/>,
  children: [
    {
    path: '/',
    element: <Home/>
    },
  
    {
  path: '/products',
  element: <Product/>
    },

        {
        path: '/products/:id/EditForm',
        element: <EditForm/>
          },

  ]
},


]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
