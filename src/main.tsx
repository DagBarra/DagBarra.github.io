import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import DBarra from './routes/DBarra.tsx'
import Contact from './routes/Contact.tsx'


import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <DBarra />,
  },
  {
    path: "/Contact",
    element: <Contact />,
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
