import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const SharedLayout = () => {
  return (
    <>
      <Header />

      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
