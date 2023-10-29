import { Card, Image, Layout } from 'antd';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import React, { useState } from 'react';
import'./styles/style.css'
import Meta from 'antd/es/card/Meta';
import Link from 'antd/es/typography/Link';
import MainPage from './component/mainpage';
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import GameDetail from './component/gameDetail';
import Main from './component/main';

export default function App() {
const router =  createBrowserRouter(
  [
    {
      path:"",
      element:<div>
        <Main></Main>
      </div>,
      children:[
        {
          path:'/',
          element:<div>
            <MainPage></MainPage>
          </div>
        }
        ,
        {
          path:':id',
          element:<div>
            <GameDetail></GameDetail>
          </div>
        }
      ]
    }
  ]
)
 
return (
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
}
