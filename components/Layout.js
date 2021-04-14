import { Contact } from "./Contact";
import { Navbar } from "./Header/Navbar";



const Layout = ({ children }) => {
  return (
    <div>
      <Navbar/>
      
      <Contact />
      <button className="scroll-top tran3s">
        <i className="fa fa-angle-up" aria-hidden="true"></i>
      </button>
      {children}
    </div>
  );
};

export default Layout;
