import { Route, Routes } from "react-router-dom";
import App from "./App";
import { About } from "./Components/About";
import { Contact } from "./Components/Contact";
import { Experience } from "./Components/Experience";
import Profile from "./Components/Profile";

export default function AppRouter() {
  return (
    <Routes>
      <Route element={<App/>}>
        <Route path="*" element={<Profile />} />
        <Route path="about" element={<About />} />
        <Route path="skills" element={<Experience />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}