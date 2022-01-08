import React from "react";
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";

// projects
import L_ReactKEEPER from "../../assets/img/projects/Keeper.png";
import L_BLOG from "../../assets/img/projects/Blog.png";
import L_WEATHER from "../../assets/img/projects/weather.png";
import L_COVID from "../../assets/img/projects/covid19.png";
 import L_PortFolio from "../../assets/img/projects/PortFolio.png";
 import L_PHOTO from "../../assets/img/projects/Photo.png";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

// skills
import L_REACT from "../../assets/img/skills/react.svg";
import L_NODE_JS from "../../assets/img/skills/nodejs.svg";
import L_EXPRESS from "../../assets/img/skills/express.svg";
// import L_MYSQL from "../../assets/img/skills/mysql.svg";
import L_MONGODB from "../../assets/img/skills/mongodb.svg";
import Image from "react-bootstrap/Image"; 
import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_BOOTSTRAP4 from "../../assets/img/skills/bootstrap-4.svg";
import L_MATERIALUI from "../../assets/img/skills/material-ui-1.svg";
import L_PYTHON from "../../assets/img/skills/python.svg";
import L_PANDAS from "../../assets/img/skills/Pandas.png";
import L_SEABORN from "../../assets/img/skills/Seaborn.svg";
import L_NUMPY from "../../assets/img/skills/Numpy.png";


import "./projects-timeline.styles.css";

const TimeLine = () => {
  return (
    <div id="projects">
      <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
      <Timeline>
        <Events>
        {/* Project: Todo List With MUI */}
        <ImageEvent
            date="25/06/2021"
            className="text-center"
            text="React Keeper App"
            src={L_ReactKEEPER}
            alt="React Keeper App"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This is Keeper App(Note Taking) created with React that keeps a track of your notes 
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Make Your Notes</li>
                          <li>Powered by React</li>
                          <li>Respoisive Design</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_MATERIALUI}
                                alt="Material-UI"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Material-UI
                            </span>
                          </li>
                          
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                
                <UrlButton
                  href="https://github.com/chaudharyshubham04/Keeper-App"
                  target="_blank" 
                >
                  SOURCE CODE
                </UrlButton>
                
              </div>
            </div>
          </ImageEvent>


{/* Project: Photo Gallery */}
<ImageEvent
            date="20/04/2020"
            className="text-center"
            text="Photo Image Gallery"
            src={L_PHOTO}
            alt="image gallery"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This is an authenticated Photo Image Gallery in which a user or a group of users can login and view their photos or group photos 
                        It uses NodeJs,ExpressJs,MongoDb to acomplish the same.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Upload ,Delete or Edit your photos by signing in into the app</li>
                          <li>Real-time API calls with Backend features</li>
                          <li>Styled with  BootStrap</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_NODE_JS}
                                alt="Node.js"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Node.js
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_EXPRESS}
                                alt="Express"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Express
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_MONGODB}
                                alt="MongoDB"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              MongoDB
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_BOOTSTRAP4}
                                alt="BOOTSTRAP4"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              BOOTSTRAP
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://github.com/chaudharyshubham04/new-photo-gallery"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
                 
              </div>
            </div>
          </ImageEvent>

          {/* Project: BLogging App*/}
          <ImageEvent
            date="01/07/2021"
            className="text-center"
            text="Blog Application"
            src={L_BLOG}
            alt="Get GitHub Info"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong>This is Web based Authenticated Blog Application Build using ReactJs as frontend and Backend constitutes of Nodejs along with ExpressJs and MongDb in which a user can read the other Blogs been uploaded to the webApp by signing into their account and can write or edit their own Blog also.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>User can read Blog ,write Blog or Edit Blog</li>
                          <li>Real-time API calls</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_NODE_JS}
                                alt="Node.js"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Node.js
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_EXPRESS}
                                alt="Express"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Express
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_MONGODB}
                                alt="MongoDB"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              MongoDB
                            </span>
                          </li> 
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
              
                <UrlButton
                  href="https://github.com/chaudharyshubham04/Blog-Application"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
                 
              </div>
            </div>
          </ImageEvent>

          {/* Project: Covid19 */}
          <ImageEvent
            date="10/06/2021"
            className="text-center"
            text="Covid-19 Data Analysis"
            src={L_COVID}
            alt="Covid-19 Data Analysis"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> Merge datasets to calculate need measures and prepare them for analysis
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Merged datasets and finding correlations among our data.</li>
                          <li>Visualised our analysis results using Seaborn</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_PYTHON}
                                alt="Python"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Python
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_SEABORN}
                                alt="Seaborn"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Seaborn
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_PANDAS}
                                alt="Pandas"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Pandas
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_NUMPY}
                                alt="Numpy"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Numpy
                            </span>
                          </li>
                           
                          
                        </ul>
                        <hr />
                        
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                {/* <UrlButton
                  href=" "
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton> */}
                <UrlButton
                  href="https://github.com/chaudharyshubham04/Covid-19-Data-Analysis-"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
                 
              </div>
            </div>
          </ImageEvent>

          {/* Project: Weather App */}

          <ImageEvent
            date="03/06/2021"
            className="text-center"
            text="Weather App"
            src={L_WEATHER}
            alt="Weather App"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> An app that allows to
                        search weather of various cities fetched in real-time .
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Search City</li>
                          <li>Weather of cities being fetched via API call</li>
                          <li>Usage of React and Material-Ui</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_MATERIALUI}
                                alt="Material"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Material-Ui
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React
                            </span>
                          </li>
                          
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                {/* <UrlButton
                  href="https://github.com/chaudharyshubham04/Weather-App-using-react"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton> */}
                <UrlButton
                  href="https://github.com/chaudharyshubham04/Weather-App-using-react"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          {/* Project: PortFolio */}

          <ImageEvent
            date="05/07/2021"
            className="text-center"
            text="PortFolio Using React"
            src={L_PortFolio}
            alt="PortFolio Using React"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This is a PortFolio website made using React and Material-Ui.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>View My Projects</li>
                          <li>Connect With Me</li> 
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                        <li>
                            <span className="p-2">
                              <Image
                                src={L_MATERIALUI}
                                alt="Material"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              Material-Ui
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">

                 {/* <UrlButton
                  href="https://github.com/chaudharyshubham04/Weather-App-using-react"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton> */}

                <UrlButton
                  href="https://github.com/chaudharyshubham04/PortFolio"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

 
        </Events>
      </Timeline>
    </div>
  );
};

export default TimeLine;
