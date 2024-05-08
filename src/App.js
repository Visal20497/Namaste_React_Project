import React from 'react'
import Header from './componet/Header'
import Body from './componet/Body'
import { Toaster } from 'react-hot-toast'
import { createBrowserRouter, Outlet } from 'react-router-dom'
import About from './componet/About'
import Cart from './componet/Cart'
import Contact from './componet/Contact'
import Error from './componet/Error';
import RestaurantMenu from './componet/RestaurantMenu'

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children:[
      {
        path:'/',
        element:<Body/>
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/Cart',
        element: <Cart />
      },
      {
        path: '/Contact',
        element: <Contact />
      },
      {
        path: '/*',
        element: <Error/>
      },
      {
        path: '/restaurant/:resId',
        element:<RestaurantMenu/>
      },
    ],
    errorElement:<Error/>,
  }
 
])
function App() {
  return (
    <div>
      <Toaster/>
      <Header/>
      <Outlet/>
    </div>
  )
}



export default  App