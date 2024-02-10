import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './assets/styles/main.scss'
import ShopContextProvider from './ShopContext.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Shop from './pages/Shop.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Product from './pages/Product.jsx'
import Cart from './pages/Cart.jsx'
import Order from './pages/Order.jsx'
// import './index.js'
const router = createBrowserRouter([
  {
    path:"/womazing/",
    element: <App/>,
    children:[
      {
        path: "/womazing/",
        element: <Home/>
      },
      {
        path: "/womazing/Shop",
        element: <Shop/>
      },
      {
        path: "/womazing/About",
        element: <About/>
      },
      {
        path: "/womazing/Contacts",
        element: <Contact/>
      },
      {
        path: "/womazing/Product/:productId",  // Keep the old route for compatibility
        element: <Product />
      },
      {
        path: "/womazing/Cart",
        element: <Cart/>
      },
      {
        path: "/womazing/Order",
        element: <Order/>
      },
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ShopContextProvider>
      <RouterProvider router={router}/>
    </ShopContextProvider>
  </React.StrictMode>
)
