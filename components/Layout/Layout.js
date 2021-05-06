import { Navbar } from './components/Header/Navbar'
import { Footer } from './components/Footer'
import Loader from './components/Loader'
import Normalize from 'react-normalize'
import 'normalize.css'

const Layout = ({ children }) => {
  return (
    <div className="main-page-wrapper">
      <Loader />
      <Navbar />
      <Normalize/>
      {children}
      <Footer />
      <button className="scroll-top tran3s">
        <i className="fa fa-angle-up" aria-hidden="true">
         
        </i>
      </button>
    </div>
  )
}

export default Layout
