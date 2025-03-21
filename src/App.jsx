import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css"
import { AppLayout } from "./components/layout/AppLayout";
import { ErrorPage } from "./components/pages/ErrorPage";
import { Home } from "./components/pages/Home";
import { About } from "./components/pages/About";
import { Country } from "./components/pages/Country";
import { Contact } from "./components/pages/Contact";
import { CountryDetails } from "./components/layout/CountryDetails";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/country",
          element: <Country />,
        },
        {
          path: "/country/:id",
          element: <CountryDetails />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
