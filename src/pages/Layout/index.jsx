import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Outlet } from "react-router-dom";

const Layout = ({ updateFunction2 }) => {
  return (
    <>
      <Header updateFunction3={updateFunction2} />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
