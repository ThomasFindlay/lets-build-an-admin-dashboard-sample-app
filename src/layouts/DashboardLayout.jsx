import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";

const DashboardLayout = props => {
  return (
    <Sidebar>
      <Header />
      <main className="k-m-6">
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
    </Sidebar>
  );
};

export default DashboardLayout;
