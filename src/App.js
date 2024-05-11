import React, { lazy, Suspense } from 'react'
import Header from './Component/Header.js'
import Body from './Component/Body.js'
import { Toaster } from 'react-hot-toast'
import { createBrowserRouter, Outlet } from 'react-router-dom'
import About from './Component/About.js'
import Cart from './Component/Cart.js'
import Contact from './Component/Contact.js'
import Error from './Component/Error.js';
import RestaurantMenu from './Component/RestaurantMenu.js'


const Grocery = lazy(() => import('./Component/Grocery.js'))

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Body />
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
        path: '/grocery',
        element: <Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense>
      },
      {
        path: '/*',
        element: <Error />
      },
      {
        path: '/restaurant/:resId',
        element: <RestaurantMenu />
      },
    ],
    errorElement: <Error />,
  }

])
function App() {
  return (
    <div>
      <Toaster />
      <Header />
      <Outlet />
    </div>
  )
}



export default App