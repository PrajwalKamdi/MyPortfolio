import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from "react-router-dom";
import App from "./App";
import Contact from "./Contact/Contact";
import Education from "./Education/Education";
import Home from "./Home/Home";
import "./index.css";
import Project from "./Project/Project";
import Skills from "./Skills/Skills";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}>
   
      <Route path="/" element={<Home/>}/>
      <Route path="education" element={<Education/>}/>
      <Route path="skills" element={<Skills/>}/>
      <Route path="project" element={<Project/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path="home/contact" element={<Contact/>}/>

   </Route>
  )
);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
