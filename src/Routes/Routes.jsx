import { createBrowserRouter} from "react-router-dom";
import Root from "../layout/Root";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import AddItems from "../Pages/AddItems/AddItems";
import ItemDetails from "../Pages/ItemDetails/ItemDetails";

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
          path:"/additems",
          element:<AddItems></AddItems>,
      },

      {
        path:"/view-details/:id",
        element:<ItemDetails></ItemDetails>,
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