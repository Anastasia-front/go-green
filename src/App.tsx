import { Route, Routes } from "react-router-dom";

import { SharedLayout } from "./components";
import { About, Blog, Contact, Home, NotFound, Services } from "./pages";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="blog" element={<Blog />} />
        <Route path="services" element={<Services />} />
        <Route path="contact" element={<Contact />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
