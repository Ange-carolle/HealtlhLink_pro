import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function Layout({ children }) {

  const hiddenNavbarRoutes = ["/AcceuilMedecin", "/DashboardAdmin"];
  const shouldShowNavbar = !hiddenNavbarRoutes.includes(

    window.location.pathname
  );

  return (
    <div className="w-full h-screen relative flex ">
      <div className="w-[20%] h-full bg_side overflow-hiden overflow-y-auto">
        <Sidebar />
      </div>
      <div className="relative w-[85%] h-full bg_color overflow-auto scrollbar-none">
        {shouldShowNavbar && <Navbar />}
        <div className="relative">{children}</div>
      </div>
    </div>
  );
}

export default Layout;
