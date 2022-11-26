import { createBrowserRouter } from 'react-router-dom'
import AllShow from '../component/allshow/AllShow';
import Blog from '../component/blog/Blog';

import Error from "../component/error/Error";
import Home from "../component/Home/Home";
import Main from "../layout/Main";

const router = createBrowserRouter([

    {
        path: '/',
        errorElement:<Error></Error>,
        element: <Main></Main>,
        children: [
            
           
            {
                path: '/home',
                element:<Home></Home>
                
            },

            {
                path: '/',
                element:<Home></Home>
                
            },

            {
                path: '/allshow',
                element:<AllShow></AllShow>
                
            },
            {
                path: '/blog',
                element:<Blog></Blog>
                
            },


            
    //   {

    //     path: '/service/:id',
    //       element: <Private><Products></Products></Private>  ,
    //       loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`)
    //   }  
        ]

    }
  


])
export default router;

