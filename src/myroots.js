import React from "react";

// All pages that rely on 3rd party components (other than Bootstrap) are
// loaded asynchronously, to keep the initial JS bundle to a minimum size

// Layouts
import DashboardLayout from "./layouts/Dashboard";

// Dashboards
import Default from "./pages/dashboards/Default";

// Pages
import Blank from "./pages/pages/Blank";


const routes = [
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        path: "",
        element: <Default />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "default",
        element: <Default />,
      },
    ],
  },
  {
    path: "pages",
    element: <DashboardLayout />,
    children: [
      {
        path: "blank",
        element: <Blank />,
      },
    ],
  },
];

export default routes;