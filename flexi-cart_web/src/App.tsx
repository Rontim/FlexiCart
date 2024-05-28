import { Flowbite } from "flowbite-react";
import {
  createBrowserRouter as Router,
  RouterProvider,
} from "react-router-dom";

import { Provider } from "react-redux";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "./pages/Home";
import Services from "./pages/Services";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import { store } from "./redux/store";
import Activate from "./pages/Activation";
import ResendActivation from "./pages/ResendActivation";
import CheckEmail from "./pages/CheckEmail";
import ForgotPassword from "./pages/ForgotPassword";
import PasswordReset from "./pages/PasswordReset";
import NotFound from "./pages/NotFound";
import Products from "./pages/Products";

const routes = Router([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/services",
    element: <Services />,
  },

  {
    path: "/auth/register",
    element: <SignUp />,
  },
  {
    path: "/auth/login",
    element: <SignIn />,
  },
  {
    path: "/auth/activate/:uid/:token",
    element: <Activate />,
  },
  {
    path: "/auth/resend-activation",
    element: <ResendActivation />,
  },
  {
    path: "/auth/check-email",
    element: <CheckEmail />,
  },
  {
    path: "/auth/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/auth/password/reset/confirm/:uid/:token",
    element: <PasswordReset />,
  },

  {
    path: "/products/:categoryslug",
    element: <Products />,
    loader: async ({ params }) => {
      try {
        const req = await fetch(
          `http://localhost:8000/api/v1/products/${params.categoryslug}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (req.ok) {
          return await req.json();
        } else {
          return [];
        }
      } catch (error) {
        return [];
      }
    },
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

function App() {
  return (
    <Provider store={store}>
      <Flowbite>
        <ToastContainer />
        <RouterProvider router={routes} />
      </Flowbite>
    </Provider>
  );
}

export default App;
