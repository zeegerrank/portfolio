import { createBrowserRouter, RouterProvider } from "react-router-dom";

import PageLayout from "./pages/AppLayout";
import Home from "./pages/home/Home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <PageLayout />,
      children: [{ index: true, element: <Home /> }],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
