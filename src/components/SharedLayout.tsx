import { Suspense } from "react";
import { Outlet, useLocation } from "react-router-dom";

import { Footer, Header } from ".";

export const SharedLayout = () => {
  const location = useLocation();

  const isRootPath = location.pathname === "/";

  return (
    <>
      <Header />
      <main className="main container">
        <Suspense fallback={<div>Loading page...</div>}>
          <Outlet />
        </Suspense>
      </main>
      {!isRootPath && <Footer />}
    </>
  );
};
