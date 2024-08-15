import React from "react";
import RootLayout from "./ui/RootLayout";
import BlogPage from "./features/blog/BlogPage";
import AddForm from "./features/blog/AddForm";
import EditForm from "./features/blog/EditForm";

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
        {
          path: "add-blog",
          element: <AddForm />,
        },
        {
          path: "edit-blog/:id",
          element: <EditForm />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
