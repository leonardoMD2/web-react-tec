import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/AppMain.jsx'
import { ProgMain } from './routes/main-prog.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import './css/index.css'

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },
  {
    path:"/programacion",
    element:<ProgMain/>
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
