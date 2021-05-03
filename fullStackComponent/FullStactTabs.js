import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}


export function FullStactTabs() {
 
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <section className="fullstack_tab-wrapper">
      <div className="container">
        <AppBar position="static">
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="simple tabs example"
          >
            <Tab
              label="Programming Fundamentals"
              {...a11yProps(0)}
              className="tabs-label"
            />
            <Tab
              label="Web Frameworks"
              {...a11yProps(1)}
              className="tabs-label"
            />
            <Tab label="Javascript" {...a11yProps(2)} className="tabs-label" />
            <Tab
              label="Front-End frameworks"
              {...a11yProps(3)}
              className="tabs-label"
            />
            <Tab
              label="Student Projects"
              {...a11yProps(4)}
              className="tabs-label"
            />
            <Tab
              label="Post-Grad Career Support"
              {...a11yProps(5)}
              className="tabs-label"
            />
          </Tabs>
        </AppBar>
        <div className="row">
          <TabPanel value={value} index={0}>
            <div className="col-lg-6 col-sm-6  col-md-6 col-6">
              <div className="programming-wrapper">
                <div className="programming-wrapper-image">
                  <img
                    src="https://images.ctfassets.net/hkpf2qd2vxgx/Jkcg3tn29442NezTqbpOW/8a0bedbb342aacacef3813128d1ee48b/DS_PDP-nonParametricAlgo.png_ixlib_imgixjs-3.3.0_w_100"
                    alt="programming"
                  />
                </div>
                <div className="programming-wrapper-info">
                  <h4>Object-Oriented Programming</h4>
                  <p>
                    Get comfortable with object-oriented programming and Object
                    Relational Mappers.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-6  col-md-6 col-6">
              <div className="programming-wrapper">
                <div className="programming-wrapper-image">
                  <img
                    src="https://images.ctfassets.net/hkpf2qd2vxgx/rmRtcERgYGW7YI3Qjc7lB/30563bf16a52842e41e0f609db0c09fd/2.svg"
                    alt="programming"
                  />
                </div>
                <div className="programming-wrapper-info">
                  <h4>SQL</h4>
                  <p>
                    Dive into the fundamentals of programming, starting with
                    SQL.
                  </p>
                </div>
              </div>
            </div>
          </TabPanel>

          <TabPanel value={value} index={1}>
            <div className="col-lg-6 col-sm-6  col-md-6 col-6">
              <div className="programming-wrapper">
                <div className="programming-wrapper-image">
                  <img
                    src="https://images.ctfassets.net/hkpf2qd2vxgx/7L10NNLvVayTSoTGAKmRiw/9d6329e48e2a398ec7da8bf1005de5a6/3.svg"
                    alt="programming"
                  />
                </div>
                <div className="programming-wrapper-info">
                  <h4>Object-Oriented Programming</h4>
                  <p>
                    Get comfortable with object-oriented programming and Object
                    Relational Mappers.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-6  col-md-6 col-6">
              <div className="programming-wrapper">
                <div className="programming-wrapper-image">
                  <img
                    src="https://images.ctfassets.net/hkpf2qd2vxgx/2mlXOdUMaSCOOxUe86gS1D/9e6016682e5e2732cc8edb1ce5230705/4.png?fit=scale&fm=png&q=85&w=286"
                    alt="programming"
                  />
                </div>
                <div className="programming-wrapper-info">
                  <h4>Sinatra</h4>
                  <p>
                    You’ll be exposed to design patterns in web applications and
                    introduces architectural patterns, template rendering, and
                    application environments.
                  </p>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <section className="programming-wrapper">
              <div className="programming-wrapper-image">
                <img
                  src="https://images.ctfassets.net/hkpf2qd2vxgx/6A7B7uslPWzKLuPDKr8Pve/fd191c08d8349f507bd2b4eebf351bb8/6.svg"
                  alt="programming"
                />
              </div>
              <div className="programming-wrapper-info">
                <h4>JavaScript</h4>
                <p>
                  Gain a thorough understanding of JavaScript and functional
                  programming — crucial for front-end developers.
                </p>
              </div>
            </section>
          </TabPanel>
          <TabPanel value={value} index={3}>
            <div className="col-lg-6 col-sm-6  col-md-6 col-6">
              <div className="programming-wrapper">
                <div className="programming-wrapper-image">
                  <img
                    src="https://images.ctfassets.net/hkpf2qd2vxgx/7B1Rd2mJE4G6aUczUMwYcu/4ea2c22d8c85fc7c46d98f7e721c21d1/7.svg"
                    alt="programming"
                  />
                </div>
                <div className="programming-wrapper-info">
                  <h4>React</h4>
                  <p>
                    Learn to build productive, scalable front-ends with React.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-6  col-md-6  col-6">
              <div className="programming-wrapper">
                <div className="programming-wrapper-image">
                  <img
                    src="https://images.ctfassets.net/hkpf2qd2vxgx/6T2RCETz8vlNfu2Q60IQCV/9fb64b86f0bdd0ec490d2cc533324d57/8.svg"
                    alt="programming"
                  />
                </div>
                <div className="programming-wrapper-info">
                  <h4>Redux</h4>
                  <p>
                    Create slick, functional, reactive code with Redux as a
                    state manager.
                  </p>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={4}>
            <div className="col-lg-6 col-sm-6 col-md-6  col-6">
              <div className="programming-wrapper">
                <div className="programming-wrapper-image">
                  <img
                    src="https://images.ctfassets.net/hkpf2qd2vxgx/0mN6KadCfi9StQU8UFOIE/925d20ad25771c8b159aea08e3b177b0/download__1_.png?fit=scale&fm=png&q=85&w=286"
                    alt="programming"
                  />
                </div>
                <div className="programming-wrapper-info">
                  <h4>Group Projects</h4>
                  <p>
                    At the conclusion of each program module, you’ll build
                    advanced portfolio projects on a team to demonstrate both
                    your new technical skills and your creativity.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-6   col-md-6 col-6">
              <div className="programming-wrapper">
                <div className="programming-wrapper-image">
                  <img
                    src="https://images.ctfassets.net/hkpf2qd2vxgx/gQIriWlj18KfndNTgJdjq/bc372c92d0184b66592996d4e2a3f873/admissions-lightbulb.png?fit=scale&fm=png&q=85&w=286"
                    alt="programming"
                  />
                </div>
                <div className="programming-wrapper-info">
                  <h4>Solo Projects</h4>
                  <p>
                    After completing four curriculum modules focused on group
                    projects, collaborate with your instructors to conceive a
                    solo project and spend three weeks building it. You’ll
                    receive plenty of instructor feedback along the way while
                    diving deep into the various advanced technologies and/or
                    techniques needed to bring your concept to life.
                  </p>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={5}>
            <div className="col-lg-6 col-sm-6 col-md-6 col-6">
              <div className="programming-wrapper">
                <div className="programming-wrapper-image">
                  <img
                    src="https://images.ctfassets.net/hkpf2qd2vxgx/7qF2Gm8CjM4X7PSqvpL1k3/7529c7f56bb07e851592c53337ba75dc/graduation.svg"
                    alt="programming"
                  />
                </div>
                <div className="programming-wrapper-info">
                  <h4>Career Support</h4>
                  <p>
                    Our Career Coaching team helped more than 1,200 students
                    launch careers as software engineers. Before you graduate,
                    you’ll work 1:1 with a dedicated Career Coach to develop
                    your employer pipeline, conduct outreach, review and refine
                    your online presence, and prepare for interviews.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-6 col-md-6 col-6">
              <div className="programming-wrapper">
                <div className="programming-wrapper-image">
                  <img
                    src="https://images.ctfassets.net/hkpf2qd2vxgx/5lhjBM4PMq6mJRpe75eXbR/176f7e574001fa13dfcb9aa466a387ca/svg-group-intructor-support-small-icon.svg"
                    alt="programming"
                  />
                </div>
                <div className="programming-wrapper-info">
                  <h4>Alumni Community</h4>
                  <p>
                    For Flatiron School alumni, the journey doesn’t stop at
                    graduation. You’ll join an active network of successful
                    software engineers and the WeWork global community. You’ll
                    network, connect, and collaborate with Flatiron School grads
                    with access to our events and network wherever you go.
                  </p>
                </div>
              </div>
            </div>
          </TabPanel>
        </div>
      </div>
    </section>
  );
}
