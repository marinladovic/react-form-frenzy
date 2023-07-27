import { HomeModule } from "@/modules/HomeModule/HomeModule";
import RootModule from "@/modules/RootModule/RootModule";
import { SagaModule } from "@/modules/SagaModule/SagaModule";
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
        path: "/saga",
        element: <SagaModule />,
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
