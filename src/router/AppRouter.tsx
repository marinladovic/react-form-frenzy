import { HomeModule } from "@/modules/HomeModule/HomeModule"
import { ProductDetailModule } from "@/modules/ProductDetailModule/ProductDetailModule"
import { ProductModule } from "@/modules/ProductModule/ProductModule"
import RootModule from "@/modules/RootModule/RootModule"
import { UserDetailModule } from "@/modules/UserDetailModule/UserDetailModule"
import { UsersModule } from "@/modules/UsersModule/UsersModule"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootModule />,
    children: [
      {
        index: true,
        element: <HomeModule />,
      },
      {
        path: "/products",
        element: <ProductModule />,
        children: [
          {
            path: ":id",
            element: <ProductDetailModule />,
          },
        ],
      },
      {
        path: "/users",
        element: <UsersModule />,
        children: [
          {
            path: ":id",
            element: <UserDetailModule />,
          },
        ],
      },
    ],
  },
])

const AppRouter = () => {
  return <RouterProvider router={router} />
}

export default AppRouter
