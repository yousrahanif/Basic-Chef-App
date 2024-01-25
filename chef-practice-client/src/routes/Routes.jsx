import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout/Layout";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Home from "../pages/Home/Home";
import RecipeLayout from "../pages/Layout/RecipeLayout";
import Recipes from "../pages/Recipes/Recipes";
import RecipeDetails from "../pages/Recipes/RecipeDetails";
import RecipeCard from "../pages/Recipes/RecipeCard";
import Chef from "../pages/Chef/Chef";
import ChefCard from "../pages/Chef/ChefCard";
import Google from "../pages/Google/Google";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {

    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {

        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/google',
        element: <Google></Google>
      },
      {
        path: '/recipes',
        element: <Recipes></Recipes>,
        loader: () => fetch("http://localhost:5000/recipes")
        // loader: () => fetch("http://localhost:5000/recipes").then((res) => res.json()),
      },
      {
       
        path: '/recipes/:id',
        element: <PrivateRoute><RecipeCard></RecipeCard></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/recipes/${params.id}`),

      },
      {
        path:'/chef',
        element: <Chef></Chef>,
        loader: ()=>fetch("http://localhost:5000/chef").then((res) => res.json())

      },
     
      {
        path:'/chef/:id',
        element: <ChefCard></ChefCard>,
        loader: ({params})=>fetch(`http://localhost:5000/chef/${params.id}`)
      }

    ]

  },
  
])
export default router;