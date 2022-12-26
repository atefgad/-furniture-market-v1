import React from "react";
import { Outlet } from "react-router-dom";

import { Toaster } from "react-hot-toast";
//import { useLocation } from "react-router-dom";

import { Header, Footer, Modal } from "../../components";

const Layout = () => {
  //const location = useLocation();
  // const header = location.pathname.startsWith("/dashboard") ? (

  return (
    <React.Fragment>
      <Header />
      <div className="page__container">
        <Outlet />
      </div>

      <Toaster position="top-left" reverseOrder={false} />
      <Modal />
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
