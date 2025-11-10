import { createBrowserRouter, type RouteObject } from "react-router-dom";
import App from "../App";
import NotFoundPage from "./NotFoundPage";
import HomePage from "../pages/HomePage";
import ServicesPage from "./ServicesPage";
import ContactsPage from "./ContactsPage";

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
