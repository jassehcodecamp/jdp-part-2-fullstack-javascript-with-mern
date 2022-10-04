import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from "./App"
import Index, { loader as countriesLoader } from "./Pages/Index"
import Country, { loader as countryLoader } from "./Pages/Country"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        path: "/",
        loader: countriesLoader,
        element: <Index />,
      },
      {
        path: "/countries/:countryName",
        loader: countryLoader,
        element: <Country />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
