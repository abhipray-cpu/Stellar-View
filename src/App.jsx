import {RouterProvider,createBrowserRouter} from "react-router-dom"
import Landing from './pages/Landing'
import Home,{loader as homeLoader} from './pages/Home'
const router = createBrowserRouter([
  {
    path:'/',
    element:<Landing></Landing>,
    index:true,
    id:'index'
  },{
    path:'/home',
    element:<Home></Home>,
    loader:homeLoader,
    id:'home'
  }
])

function App(){
  return <RouterProvider router={router} className="overflow-x-hidden"></RouterProvider>;
}

export default App;