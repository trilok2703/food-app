import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider,Outlet } from 'react-router-dom';

import Header from './components/Header';
import Body from './components/Body';
// import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/contact';
import RestaurantMenu from './components/RestaurantMenu';
import Error from './components/Error';
// import Grocery from './components/Grocery';

const AppLayout = () =>{

    return (
        <div className='app'>
            <Header/>
            <Outlet/>
            {/* <Footer/> */}
        </div>
    )
}

const Grocery = lazy(()=>import('./components/Grocery'));

const appRouter = createBrowserRouter([
    {
        path:'/',
        element:<AppLayout/>,
        children:[
            {
                path:'/',
                element:<Body/>
            },
            {
                path:'/about',
                element:<About/>
            },
            {
                path:'/contact',
                element:<Contact/>
            },
            {
                path:'/restaurants/:resId',
                element:<RestaurantMenu/>
            },
            {
                path:'/grocery',
                element:(<Suspense fallback={<p>Loading...</p>}>
                    <Grocery/>
                </Suspense>) 
            }
        ],
        errorElement:<Error/>
    },
    
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>)