import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/AppMain.jsx'
import { ProgMain } from './routes/main-prog.jsx'
import { QuimMain } from './routes/main-quim.jsx'
import { ElectMain } from './routes/main-elect.jsx'
import { createBrowserRouter,RouterProvider, Route } from 'react-router-dom'
import './css/index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
        path: "/programacion",
        element: <ProgMain />
  }
  ,
  {
        path: "/quimica",
        element: <QuimMain />
  },{
  path: "/electro",
  element: <ElectMain />
}

    ]
  
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
