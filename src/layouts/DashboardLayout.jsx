import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";
import Drawer from "./components/drawer/Drawer";

const DashboardLayout = props => {
  return (
    <Drawer>
      <Header />
      <main className="k-m-6">
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
    </Drawer>
  );
};

export default DashboardLayout;
