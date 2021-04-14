import Link from "next/link"

export function Navbar() {
  return (
    <div>
      
      <header className="theme-menu-wrapper full-width-menu">
        <div className="header-wrapper">
          <div className="clearfix">
            <div className="logo float-left tran4s">
              
                <a href='/'> 
                  <img
                    src="images/logo/catlogo.png"
                    alt="Logo"
                    style={{ width: "150px" }}
                  />
                </a>
              
            </div>
            <nav
              className="theme-main-menu float-right navbar"
              id="mega-menu-wrapper"
            >
              <div className="navbar-header">
                <button
                  type="button"
                  className="navbar-toggle collapsed"
                  data-toggle="collapse"
                  data-target="#navbar-collapse-1"
                  aria-expanded="false"
                >
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
              </div>

              <div className="collapse navbar-collapse" id="navbar-collapse-1">
                <ul className="nav">
                  <li className="dropdown-holder menu-list active">
                    <a href="/" className="tran3s">
                      Kurslar
                    </a>
                    <ul className="sub-menu">
                      <li className="dropdown-holder menu-list">
                        <a href="/" className="tran3s">
                          Dasturlash
                        </a>
                        <ul className="sub-menu-one">
                          <li>
                            
                              <a href='/fullstack'>Full Stack development</a>
                           
                          </li>
                          <li>
                            <Link href="/bootcamp">
                              <a>Bootcamp</a>
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                      <Link href='/robo_kids'>
                        <a>Robo kids</a>
                        </Link>
                      </li>
                      <li>
                     
                        <a href='/english'>English</a>
                      
                      </li>
                      <li>
                      
                        <a href="/">Scratch</a>
                      
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown-holder menu-list">
                  <Link href='/blog'>
                    <a  className="tran3s">
                      Blog
                    </a>
                  </Link>
                  </li>
                  <li className="dropdown-holder menu-list">
                  <Link href='/about'>
                    <a href="#" className="tran3s">
                      Biz haqimizda
                    </a>
                  </Link>
                    <ul className="sub-menu">
                      <li>
                      <Link href='/about_us'>
                        <a>About Us</a>
                        </Link>
                      </li>
                      <li>
                      
                        <a href='/career'>Career</a>
                      
                      </li>
                    </ul>
                  </li>

                  <li className="login-button">
                  <Link href='/'>
                    <a
                      
                      className="tran3s"
                      data-toggle="modal"
                      data-target=".signUpModal"
                    >
                      Ro'yxatdan o'tish
                    </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
}
