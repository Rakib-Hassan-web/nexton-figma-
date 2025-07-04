import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import LayoutOne from './Layout/LayoutOne'
import Home from './pages/Home'

function App() {
const [count, setCount] = useState(0)


const myroute = createBrowserRouter(createRoutesFromElements(

<Route>

<Route path='/' element={<LayoutOne/>}>
  
  <Route index element={<Home/>}/>
</Route>


</Route>


))
return (
<>


  <RouterProvider router={myroute} />
</>
)
}

export default App