import { Navbar } from "./components/Header/Navbar";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import Loader from "./components/Loader";

const Layout = ({ children }) => {
  return (
    <div className="main-page-wrapper">
      <Loader />
      <Navbar />

      {children}
      <Footer />
      <Contact />

      <button className="scroll-top tran3s">
        <i className="fa fa-angle-up" aria-hidden="true"></i>
      </button>
    </div>
  );
};

export default Layout;
