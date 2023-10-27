import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Heading from './Heading'
import Search from './Search'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  const home = createBrowserRouter([
    {
      path: "/",
      element: 
      <div>
        <Header/>
        <Heading/>
        {/* <Search/> */}
      </div>,
    },
    {
      path: "/header",
      element: <Header/>,
    },
    {
      path: "/heading",
      element: <Heading/>,
    },
    {
      path: "/search",
      element: <Search/>,
    },
   
  ]);

  return (
    <>
      <RouterProvider router={home} />
    </>
  )
}

export default App