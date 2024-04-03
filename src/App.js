import React, { Suspense, lazy, useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider,Outlet } from 'react-router-dom';
import {Provider} from 'react-redux';

import UserContext from './utils/UserContext';
import appStore from './utils/appStore';

import Header from './components/Header';
import Body from './components/Body';
// import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/contact';
import RestaurantMenu from './components/RestaurantMenu';
import Error from './components/Error';
import Cart from './components/Cart';
// import Grocery from './components/Grocery';

const AppLayout = () =>{
    const [userName, setUserName] = useState();

    useEffect(()=>{
        // Make an API call and send username and password
        const data = {
            userName : "Trilok Vallamkonda"
        }
        setUserName(data.userName);
    },[]);

    return (
        <Provider store={appStore}>
            <UserContext.Provider value={{loggedInUser : userName, setUserName}}>
                <div className='app'>
                        <Header/>
                        <Outlet/>
                    {/* <Footer/> */}
                </div>
            </UserContext.Provider>
        </Provider>
        
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
                path:'/cart',
                element:<Cart/>
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