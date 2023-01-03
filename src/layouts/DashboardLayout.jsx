import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";
import Drawer from "./components/drawer/Drawer";
import Breadcrumbs from "./components/breadcrumbs/Breadcrumbs";

const breadcrumbsContainerStyle = { transform: "translateX(-0.5rem)" };

const DashboardLayout = props => {
  return (
    <Drawer>
      <Header />
      <main className="k-m-6">
        <div className="k-mb-4" style={breadcrumbsContainerStyle}>
          <Breadcrumbs />
        </div>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
    </Drawer>
  );
};

export default DashboardLayout;
