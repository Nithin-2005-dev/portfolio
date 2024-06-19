import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
  Link,
  Form,
} from "react-router-dom"
import Navbar from './components/Navbar.jsx'
import About from './components/About.jsx'
import Achive from './components/Achive.jsx'
import Home from './components/Home.jsx'
import Errorpage from './components/Errorpage.jsx'
import Feedback from './components/Feedback.jsx'
import All from './components/All.jsx'
import Thankyou from './components/Thankyou.jsx'
const router=createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },
  {
    path:"*",
    element:<Errorpage></Errorpage>
  },
  {
    path:"/about",
    element:<All/>,
    children:([
      {path:"/about",
      element:<About/>
      }
    ])
  },
  {
    path:"/projects",
    element:<All/>,
    children:([
      {path:"/projects",
      element:<Achive/>
      }
    ])
  },
  {
    path:"/feedback",
    element:<All></All>,
    children:([
      {path:"/feedback",
      element:<Feedback/>
      }
    ])
  },
  {
    path:"/thanks",
    element:<Thankyou></Thankyou>
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}></RouterProvider>
)
