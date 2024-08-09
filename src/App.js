import React from "react";
import RootLayout from "./ui/RootLayout";
import BlogPage from "./features/blog/BlogPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <BlogPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
