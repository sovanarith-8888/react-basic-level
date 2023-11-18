import { useState } from "react"
import PropsComponents from "./components/sample/PropsComponents"
import { CounterOne } from "./components/sample/State"
import { createBrowserRouter, RouterProvider} from "react-router-dom"
import NavbarNav from "./components/header/Navbar"
import ServicePage from "./pages/service/ServicePage"
import AboutPage from './pages/about/AboutPage';
import HomePage from "./pages/home/HomePage"

const routers = createBrowserRouter([
  {
    path:"/",
    element: <NavbarNav/>,
    children:[
      {
        path: "/",
        element: <HomePage/>
      },
      {
        path: "/service",
        element: <ServicePage/>
      },
      {
        path: "/about",
        element: <AboutPage/>
      }
    ]
  }
])

// function App() {
//   const [count, setCount] = useState(0);
//   function onHandleClick(){
//     setCount(count + 1)
//   }
//   return (
//     <div className="box">
//       <h1>{count}</h1>
//       <CounterOne handleClick={onHandleClick}/>
//     </div>
//   )
// }

function App() {
  return (
    <>
      <RouterProvider router={routers}/>
    </>
  )
}

export default App
