import React from "react";
import Topbar from '../Topbar'
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <main className="w-full min-h-dvh fixed top-[91px] bg-example-bg">
      <Topbar/>
      <Outlet/>
    </main>
  );
}

export default AppLayout;
