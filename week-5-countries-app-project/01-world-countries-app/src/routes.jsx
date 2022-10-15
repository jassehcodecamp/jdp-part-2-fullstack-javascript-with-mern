import { createBrowserRouter } from "react-router-dom"

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

export default router
