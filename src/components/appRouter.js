import { createBrowserRouter } from "react-router-dom";
import Body from "./Body";
import About from "./About";
import Contact from "./Contact";
import Cart from "./Cart";
import App from "../App";
import ErrorPage from "./ErrorPage";
import Menu from "./Menu";

const AppRouter = createBrowserRouter([

{
  path:"/",
  element:<App/>,
  errorElement:<ErrorPage/>,
  children:[
    {
      path: "/about",
      element: <About/>,
    },
    {
        path: "/contact",
        element: <Contact/>,
      },
      {
        path: "/cart",
        element: <Cart/>,
      },
      {
        path: "",
        element: <Body/>,
      },  
      {
        path: "menu",
        element: <Menu/>,
      }, 
  ]

}    

  ]);

  export default AppRouter;
