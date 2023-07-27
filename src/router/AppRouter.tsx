import { HomeModule } from "@/modules/HomeModule/HomeModule";
import RootModule from "@/modules/RootModule/RootModule";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
        path: "/users",
        element: <div>Users</div>,
      },
      {
        path: "/posts",
        element: <div>Posts</div>,
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
