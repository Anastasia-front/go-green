import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { Footer, Header } from ".";

export const SharedLayout = () => {
  return (
    <>
      <Header />
      <main className="main container">
        <Suspense fallback={<div>Loading page...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
};
