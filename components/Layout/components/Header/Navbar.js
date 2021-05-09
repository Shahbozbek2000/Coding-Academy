import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import CloseIcon from '@material-ui/icons/Close'
import axios from 'axios'




export function Navbar() {
  const [open, setOpen] = useState(false)
  const [posts, setPosts] = useState({
    first_name: '',
    last_name: '',
    programming: '',
    phone:''
})
  const [stateLoader, setStateLoader] = useState("")
 
  const router = useRouter()
  const pathname = router.pathname

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  
 
const handleSubmit = async (e) => {
  
  setStateLoader("spinner")  
  e.preventDefault()
    console.log(posts)
   await axios.post(`https://coding2academy.herokuapp.com/create_student`, posts)
    .then(res => {
      console.log(res)
    
      setStateLoader("ok")
    })
    .catch(err => {
      console.log(err)
      setStateLoader("error")
    })
  
  }

  const changeHandler = (e) => {
    e.preventDefault()
    setPosts({
      ...posts,
      [e.target.name]: e.target.value
    })
  }

const {first_name, last_name, programming, phone} = posts
  return (
    <div>
      <header
        className={`theme-menu-wrapper full-with-menu ${
          pathname !== '/' ? 'menu-style-two' : ''
        }`}
      >
        <div className="header-wrapper">
          <div className="clearfix container">
            <div className="logo float-left tran4s">
              <a href="/">
                <img
                  src="images/logo/catlogo.png"
                  alt="Logo"
                  style={{ width: '150px' }}
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
                  <span className="sr-only"> Toggle navigation </span>
                  <span className="icon-bar"> </span>
                  <span className="icon-bar"> </span>
                  <span className="icon-bar"> </span>
                </button>
              </div>
              <div className="collapse navbar-collapse" id="navbar-collapse-1">
                <ul className="nav">
                  <li className="dropdown-holder menu-list active">
                    <a href="/full-stack" className="tran3s">
                      Kurslar
                    </a>
                    <ul className="sub-menu">
                      <li className="dropdown-holder menu-list">
                        <a href="/fullstack" className="tran3s">
                          Dasturlash
                        </a>
                        <ul className="sub-menu-one">
                          <li>
                            <a href="/full-stack">Full Stack development </a>
                          </li>
                          
                        </ul>
                      </li>
                      <li>
                        <a href="/robo-kids"> Robo kids </a>
                      </li>
                      <li>
                      <a href='/english'>
                        English 
                      </a>
                      </li>
                      <li>
                         <a href="/python">
                         Python
                         </a>
                      </li>
                    
                    </ul>
                  </li>
                  <li className="dropdown-holder menu-list">
                    <Link href="/blog">
                      <a className="tran3s"> Blog </a>
                    </Link>
                  </li>
                  <li className="dropdown-holder menu-list">
                    <Link href="/about-us">
                      <a href="#" className="tran3s">
                        Biz haqimizda
                      </a>
                    </Link>
                    <ul className="sub-menu">
                      <li>
                      <Link href='/about-us'>
                        <a> About Us </a>
                      </Link>
                      </li>
                     
                    </ul>
                  </li>
                  <li className="login-button" style={{ cursor: 'pointer' }}>
                    <a className="tran3s" onClick={handleOpen}>
                      Bog'lanish
                    </a>
                  </li>
                  <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className="modal"
                    open={open}
                    
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                      timeout: 500,
                    }}
                  >
                    <Fade in={open}>
                      <div className="paper">
                      <CloseIcon className='modal-close-icon' 
                      onClick={handleClose} />
                        <h2> Biz bilan bog'laning</h2>
                        <p>Iltimos, biz bilan bog'laning. Administratorimiz
                        bilan aloqaga chiqing </p>
                       <form onSubmit={handleSubmit} method='POST' >
                          <div className='form-group'>
                            <input type='text' className='form-control' 
                            placeholder='Ismingiz' name='first_name'
                            value={first_name} required
                            onChange={changeHandler}  />
                          </div>
                          <div className='form-group'>
                            <input type='text' className='form-control'
                            placeholder='Familiyangiz' name='last_name'
                            value={last_name} required
                            onChange={changeHandler} />
                          </div>
                          <div className='form-group'>
                          
                             <select className='form-control' onChange={changeHandler}
                             name='programming' value={programming}>
                             
                               <option value='Web Dasturlash'>Web Dasturlash</option>
                               <option value='Flutter'>Flutter</option>
                               <option value= 'Python'>Python</option>
                               <option value='Robototexnika'>Robototexnika</option>
                               <option value="Ingliz tili">Ingliz tili</option>
                             </select>
                          </div>
                          <div className='form-group'>
                            
                       <input type='tel' className='form-control' required
                       name='phone' value={phone} onChange={changeHandler} />
                              
                          </div>
                          <div className='btn-group'>
                            <button type='submit' className='form-btn'>
                              {
                                stateLoader === "" ? "Junatish" : 
                                  (stateLoader==="spinner" ? (<span><i className="fa fa-spinner fa-spin"></i>Junatilmoqda...</span>  ):
                                    (stateLoader === "ok" ? (<i className="fa fa-check">Junatildi</i>): 
                                      (stateLoader === "error" ? "Junatilmadi":null))  
                                )
                              }
                            </button>
                          </div>
                       </form>
                       
                      </div>
                    </Fade>
                  </Modal>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </div>
  )
}
