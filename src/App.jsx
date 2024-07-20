import HomePage from "./routes/homePage/homePage"
import { 
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import ListPage from "./routes/listPage/listPage"
import Layout from "./routes/layout/layout"

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />
        },
        {
          path:"/list",
          element:<ListPage />
        }
      ]
    }
  ])
  return (
    <RouterProvider router={router}/>
  )
}

export default App