
import {
createBrowserRouter,
} from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../components/home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index:true,
        Component:Home
      }
    ]
  },
]);

export default router;