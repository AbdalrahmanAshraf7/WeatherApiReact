import { useState } from 'react'
import './App.css'
import { RouterProvider ,createBrowserRouter } from 'react-router-dom'
import Home from './Comp/Home/Home'
import Layout from './Comp/Layout/Layout'

function App() {


  const route = createBrowserRouter([
    {
      path :"" ,element:<Layout/>,children:[
        {path:"",element:<Home/>},
        {path:"home",element:<Home/>}
      ]
    }
  ])

  return <>

<RouterProvider router={route}>



</RouterProvider>
  
  </>
}

export default App
