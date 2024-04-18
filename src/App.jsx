import {RouterProvider,createBrowserRouter} from "react-router-dom"
import Landing from './pages/Landing'
import Home,{loader as homeLoader} from './pages/Home'
import Details,{loader as detailsLoader} from './pages/Detail' 
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
  },
  {
    path:'/details/:code',
    element:<Details></Details>,
    loader:detailsLoader,
    id:'details'
  }
])

function App(){
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;