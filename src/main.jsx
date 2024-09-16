import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


import 'swiper/css';

// bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


// fonts and icons
import '././assets/css/icofont.min.css'
import '././assets/css/animate.css'
import '././assets/css/style.min.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Home/Home.jsx';
import Shop from './shop/Shop.jsx';
import Blog from './Blog/Blog.jsx';
import SingleProduct from './shop/SingleProduct.jsx';
import CartPage from './shop/CartPage.jsx';
import SingleBlog from './Blog/SingleBlog.jsx';
import About from './about/About.jsx';
import Contact from './contact/Contact.jsx';
// import LoginDemo from './Component/LoginDemo.jsx';
import PrivateRoute from './privateRoute/PrivateRoute.jsx';
import AuthProvider from './contexts/AuthProvider.jsx';
import Login from './Component/Login.jsx';
import SingUp from './Component/SingUp.jsx';

const router = createBrowserRouter([
  {
    path:"/", element: <App/>,
    children:[
      {path:'/', element: <Home/> },
      {path:'/blog', element: <Blog/> },
      {path:'/blog/:id', element: <SingleBlog/> },

      {
        path:"/shop", element:<Shop/>
      },
      {
        path: "shop/:id", element:<SingleProduct/>
      },
      {
        path: "cart-page", element:<PrivateRoute><CartPage/></PrivateRoute>
      },
      {
        path: "/about", element:<About/>
      },
      {
        path: "/contact", element:<Contact/>
      },
      // {
      //   path: "/login", element:<LoginDemo/>
      // },  
  
      


    ],
  },
  {
    path:"login", element:<Login/>
  },
  {
    path:"sign-up", element:<SingUp/>
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
      <RouterProvider router={router}/>
  </AuthProvider>
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
)
