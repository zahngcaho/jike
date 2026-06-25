import Layout from '@/pages/Layout'
import Login from '@/pages/Login'
import { createBrowserRouter } from "react-router-dom"
import AuthRoute from '@/components/AuthRoute'
import Home from '@/pages/Home'
import Article from '@/pages/Article'
import Publish from '@/pages/Publish'

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthRoute> <Layout /> </AuthRoute>,
    children: [
      {
        path: "/home",
        Component: Home
      },
      {
        path: "/article",
        Component: Article
      },
      {
        path: "/publish",
        Component: Publish
      }
    ]
  },
  {
    path: "/login",
    Component: Login
  }
])

export default router