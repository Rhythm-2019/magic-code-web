import { Navigate } from "react-router-dom"

import SinppetHome from "../pages/snippet/home"
import SinppetDetail from "../pages/snippet/detail"

export default [
    {
      path: '/snippet-home',
      element: <SinppetHome/>,
      children: [
        {
            path: "/detail", 
            element: <SinppetDetail/>
        }

      ]
    },
    {
        path: '/',
        element: <Navigate to='/snippet-home'/>
    }
]