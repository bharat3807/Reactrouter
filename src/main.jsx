import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Footer from './components/Footer/Footer.jsx'
import Header from './components/Header/Header.jsx'
import Contact from './components/Contact/Contact.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'
import User from './components/User/User.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
     children: [
      {
        path: "",
        element: <home/>
      },{
        path: "About",
        element: <About />,
      },
      {
        path: "Contact",
        element: <Contact />

      },
      {
        path: "User",
        element: <User />

      },
      {
        path: "Github",
        element: <Github/>,
        loader: githubInfoLoader
      }
      ,
      {
        path: "Footer",
        element: <Footer/>
      }
     ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
