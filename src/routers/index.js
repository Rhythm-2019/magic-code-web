import React from 'react';
import { Navigate } from "react-router-dom"
import SinppetHome from "../pages/snippet/home"
import SinppetDetail from "../pages/snippet/detail"

export default [
    {
      path: '/snippet-home',
      element: <SinppetHome/>,
      children: [
        {
            path: "/snippet-home/detail", 
            element: <SinppetDetail/>
        }

      ]
    },
    {
        path: '/',
        element: <Navigate to='/snippet-home'/>
    }
]