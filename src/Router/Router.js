import { createBrowserRouter } from 'react-router-dom'
import AllShow from '../component/allshow/AllShow';
import Blog from '../component/blog/Blog';

import Error from "../component/error/Error";
import Home from "../component/Home/Home";
import ShowDetails from '../component/Home/Shows/ShowDetails';
import Main from "../layout/Main";

const router = createBrowserRouter([

    {
        path: '/',
        errorElement:<Error></Error>,
        element: <Main></Main>,
        children: [
            
           
            {
                path: '/home',
              loader:()=>fetch('https://api.tvmaze.com/search/shows?q=all'),

                element:<Home></Home>
                
            },

            {
                path: '/',
                element:<Home></Home>
                
            },

            {
                path: '/allshow',
                loader:()=>fetch('https://api.tvmaze.com/search/shows?q=all'),

                element:<AllShow></AllShow>
                
            },
            {
                path: '/show/:id',
                          loader: ({params})=> fetch(`https://api.tvmaze.com/shows/${params.id}`),

                element:<ShowDetails></ShowDetails>
            
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

