import { createBrowserRouter} from "react-router-dom";
import Root from "../layout/Root";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import AddItems from "../Pages/AddItems/AddItems";
import ItemDetails from "../Pages/ItemDetails/ItemDetails";
import AllItems from "../Pages/AllItems/AllItems";
import MyItems from "../Pages/MyItems/MyItems";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import UpdateItem from "../Pages/UpdateItem/UpdateItem";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    // errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
            path:"/",
            element:<Home></Home>,
            loader: () => fetch('http://localhost:5000/items')
        },

        {
          path:"/allitems",
          element:<AllItems></AllItems>,
          loader: () => fetch('http://localhost:5000/items')
      },

      {
        path:"/myitems",
        element:<PrivateRoutes><MyItems></MyItems></PrivateRoutes>,
    },

        {
          path:"/additems",
          element:<PrivateRoutes><AddItems></AddItems></PrivateRoutes>,
      },

      {
        path:"/updateitem/:id",
        element:<PrivateRoutes><UpdateItem></UpdateItem></PrivateRoutes>,
        loader: ({params}) => fetch(`http://localhost:5000/items/${params.id}`)
    },

      {
        path:"/view-details/:id",
        element:<PrivateRoutes><ItemDetails></ItemDetails></PrivateRoutes>,
        loader: ({params}) => fetch(`http://localhost:5000/items/${params.id}`) 
    },

        {
          path:"/register",
          element:<Register></Register>,
      },

      {
        path:"/login",
        element: <Login></Login>,
    },
    ],
  },
]);

export default router;