import { createBrowserRouter, type RouteObject } from "react-router-dom";
import App from "../App";
import NotFoundPage from "../pages/NotFoundPage";
import HomePage from "../pages/HomePage";
import ServicesPage from "../pages/ServicesPage";
import ContactsPage from "../pages/ContactsPage";

export const routes: RouteObject[] = [
  {
    path: "/",
    Component: App,
    children: [
      { path: '/', Component: HomePage },
      { path: '/services', Component: ServicesPage },
      { path: '/contacts', Component: ContactsPage },
      { path: "*", Component: NotFoundPage },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
