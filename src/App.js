import './App.css';
import { RouterProvider, createBrowserRouter} from "react-router-dom"
import Login from './components/Login';
import Error404 from './components/Error404';
import { useContext, useEffect } from 'react';
import chatContext from './Context/ChatContext';
import Home from './components/Home';

function App() {
  
  const{login,setLogin}=useContext(chatContext)
  useEffect(()=>{
  if(localStorage.getItem("login")){
    setLogin(true)
  }
  },[setLogin])
  const router=createBrowserRouter([
    {
      path:'',
      errorElement:<Error404/>,
      children:[
        {index:true,element:login?<Home/>:<Login/>},
        {path:'/login',element:<Login/>}
      ]
    }
  ])
  return (
    <div className="App ">
      <RouterProvider router={router}/>
    </div>
  );
}
export default App;
