import { Route, Routes, useLocation } from "react-router-dom";

import { SharedLayout } from "./components";
import { About, Blog, Contact, Home, NotFound, Services } from "./pages";

export function App() {
  const location = useLocation();
  const isRootPath = location.pathname === "/";

  return isRootPath ? (
    <div id="bg">
      <div id="right-gradient">
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
      </div>
    </div>
  ) : (
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
