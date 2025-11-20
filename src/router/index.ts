import { createBrowserRouter, redirect, type RouteObject } from "react-router-dom";
import App from "../App";
import NotFoundPage from "../pages/NotFoundPage";
import HomePage from "../pages/HomePage";
import ServicesPage from "../pages/ServicesPage";
import ContactsPage from "../pages/ContactsPage";
import SettingsPage from "../pages/SettingsPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";

const loader = () => {
  const token = localStorage.getItem("token");
  if (!token) throw redirect("/login");
  return null;
}

const autLoader = () => {
  const token = localStorage.getItem("token");
  if (!!token) throw redirect("/");
  return null;
}

export const routes: RouteObject[] = [
  {
    path: "/",
    Component: App,
    children: [
      { path: '/', loader, Component: HomePage },
      { path: '/services', loader, Component: ServicesPage },
      { path: '/contacts', loader, Component: ContactsPage },
      { path: '/settings', loader, Component: SettingsPage },
      { path: '/login', loader: autLoader, Component: LoginPage },
      { path: '/register', loader: autLoader, Component: RegisterPage },
      { path: "*", Component: NotFoundPage },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
