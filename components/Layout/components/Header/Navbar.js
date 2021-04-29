import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import { TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import CloseIcon from '@material-ui/icons/Close'
import axios from 'axios'




export function Navbar(props) {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState(new Date())
  const [qiymat, setQiymat] = useState({
    firstName:'',
    lastName:'',
    MobileNumber: '',
    selectOption:'',
    Date: ''
  })
 
  const [state, setState] = useState({
    age: '',
    name: '',
  })
  const router = useRouter()
  const pathname = router.pathname

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
 

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(state)
    axios.post('https://jsonplaceholder.typicode.com/posts', state)
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
  }

  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }))

  const changeHandler = (e) => {
    e.preventDefault()
    setQiymat({[e.target.name]: e.target.value})
  }

  const handleChange = (event) => {
    const name = event.target.name
    
    setState({
      ...state,
      [name]: event.target.value,
    })
  }

  const {firstName, lastName, MobileNumber, selectOption} = state
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
                    <a href="/" className="tran3s">
                      Kurslar
                    </a>
                    <ul className="sub-menu">
                      <li className="dropdown-holder menu-list">
                        <a href="/fullstack" className="tran3s">
                          Dasturlash
                        </a>
                        <ul className="sub-menu-one">
                          <li>
                            <a href="/fullstack">Full Stack development </a>
                          </li>
                          <li>
                            <Link href="/bootcamp">
                              <a>Bootcamp</a>
                            </Link>
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
                        <a href="/"> Scratch </a>
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
                      <li>
                      <Link href='/career'>
                        <a> Career </a>
                      </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="login-button" style={{ cursor: 'pointer' }}>
                    <a className="tran3s" onClick={handleOpen}>
                      Ro 'yxatdan o' tish
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
                        <h2> Ro'yxatdan o'tish </h2>
                       
                        <form onSubmit={handleSubmit}>
                          <div className="form-group">
                            <TextField
                              variant="outlined"
                              className="form-control form-input"
                              label="Ismingiz"
                              type="text"
                              onChange={changeHandler}
                              name='firstName'
                              value={firstName}
                              required
                            />
                            <TextField
                              variant="outlined"
                              className="form-control form-input"
                              label="Familiyangiz"
                              type="text"
                              required
                              onChange={changeHandler}
                              name='lastName'
                              value={lastName}
                              style={{marginLeft:'17px'}}
                            />
                          </div>
                          <br />
                          <div className="form-group">
                            <TextField
                              variant="outlined"
                              className="form-control"
                              name='MobileNumber'
                              value={MobileNumber}
                              onChange={changeHandler}
                              label="Telefon raqamingiz"
                              style={{ width: '100%' }}
                              type='tel'
                            />
                          </div>
                          <br />
                          <div className="form-group">
                            <FormControl
                              variant="outlined"
                              className="form-control"
                              name='selectOption'
                              onChange={handleChange}
                              value={selectOption}
                            >
                              <InputLabel htmlFor="outlined-age-native-simple">
                              Kurslar
                              </InputLabel>
                              <Select
                                native
                                value={state.age}
                                onChange={handleChange}
                                label="Age"
                                inputProps={{
                                  name: 'age',
                                  id: 'outlined-age-native-simple',
                                }}
                              >
                                <option aria-label="None" value="" />
                                <option value={10}> Web Development </option>
                                <option value={20}> Python </option>
                                <option value={30}> Flutter </option>
                              </Select>

                            </FormControl>
                          <TextField
                           type='date'
                           variant='outlined'
                           style={{marginLeft:'17px'}}
                           name='Date'
                           value={Date}
                           onChange={handleChange}
                           className='form-control form-input'
                          />
                          </div>
                          <div className="btn-group m-auto">
                            <button type="submit"> Login </button>
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
