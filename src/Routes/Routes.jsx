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
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import ItemofCategory from "../Pages/ItemofCategory/ItemofCategory";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
            path:"/",
            element:<Home></Home>,
            loader: () => fetch('https://b9a10-server-side-tahmid-ahnaf.vercel.app/items')
        },

        {
          path:"/allitems",
          element:<AllItems></AllItems>,
          loader: () => fetch('https://b9a10-server-side-tahmid-ahnaf.vercel.app/items')
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
        loader: ({params}) => fetch(`https://b9a10-server-side-tahmid-ahnaf.vercel.app/items/${params.id}`)
    },

      {
        path:"/view-details/:id",
        element:<PrivateRoutes><ItemDetails></ItemDetails></PrivateRoutes>,
        loader: ({params}) => fetch(`https://b9a10-server-side-tahmid-ahnaf.vercel.app/items/${params.id}`) 
    },

    {
      path:"/itemsofsubcategory/:id",
      element:<ItemofCategory></ItemofCategory>,
      loader: ({params}) => fetch(`https://b9a10-server-side-tahmid-ahnaf.vercel.app/itemsBySubcategory/${params.id}`) 
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