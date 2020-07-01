import React from "react"
import CurrProfPhoto from "../images/best-professional-photo.jpg"
import { device } from "./device"
import styled from 'styled-components'
 
const MediaQueries = styled.div`
 
  @media ${device.laptopL} {
    .grid-item-line-space {
      padding-top: 1.5rem!important;
      padding-bottom: 1.5rem!important;
  }
  
  @media ${device.mobileL} {
    img {
      height: 10rem!important;
      width: 8rem!important;
    }
    .grid-item-left {
      width: 5rem!important;
    }
    .grid-item-center {
      width: 8rem!important;
    }
    .grid-item-right {
      width: 5rem!important;
    }
    p > a {
      padding-top: 1rem!important;
      padding-bottom: 1rem!important;
      padding-right: 1rem!important;
      padding-left: .6rem!important;
    }
    .grid-item-line-space {
      padding-top: 1rem!important;
      padding-bottom: 1rem!important;
    }
  }
  `
  
  const Main = () => (
  <MediaQueries>
    <main   
      style={{background: `#efefef`,
        marginTop: `1%`,
        padding: 0
      }}
    >
  
      <div className='flex-container'
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-around'
        }}
      >
        <div class='flex-item'
          style={{
            display: 'flex',
            width: '34rem',
            marginLeft: '1rem'
          }}
        >
          <div
            className='grid-container'
            style={{
              display: 'grid',
              gridTemplateColumns: 'auto',
              marginLeft: '2rem',
              marginRight: '1.5rem',
              marginTop: 0
            }}
          >
            <div
              className="grid-item"
              style={{
                fontFamily: 'arial',
                textAlign: 'center',
                paddingBottom: '1.1rem',
                justifyContent: 'center'   
              }}
            >
              <p
                style={{
                  fontSize: '1rem',
                  fontFamily: 'arial',
                  fontWeight: 'bold',
                  color: 'navy',
                  textAlign: 'center',
                  padding: 0,
                  margin: 0,
                  justifyContent: 'center'
                }}
              >
                Christopher DiStasio,
              </p>
              <p
                style={{
                  fontSize: '1rem',
                  fontFamily: 'arial',
                  fontWeight: 'bold',
                  color: 'navy',
                  textAlign: 'center',
                  padding: 0,
                  margin: 0,
                  justifyContent: 'center'
                }}
              >
                Full-stack Web Developer
              </p>
            </div>
            <div className="grid-item">
              <div
                className='grid-container'
                style={{
                  display: 'grid',
                  justifyContent: 'center',   
                  gridTemplateColumns: 'auto auto auto'
                }}
              >
                <div
                  className='grid-item-left'
                  style={{
                    padding: 0,
                    margin: 0
                  }}
                >
                  <p
                    style={{
                      fontSize: '1rem',
                      fontFamily: 'arial',
                      fontWeight: 'bold',
                      color: 'navy',
                      textAlign: 'left',
                      display: 'flex',
                      alignItems: 'left',
                      justifyContent: 'left'
                    }}
                  >
                    <a
                      href='https://tinyurl.com/ybjlrq4k'
                      style={{
                        textDecoration: 'none',
                        paddingTop: '4rem',
                        paddingRight: '1.8rem'
                      }}
                    >
                      Resume
                    </a>
                  </p>
                  <p
                    style={{
                      fontSize: '1rem',
                      fontFamily: 'arial',
                      fontWeight: 'bold',
                      color: 'navy',
                      textAlign: 'left',
                      display: 'flex',
                      alignItems: 'left',
                      justifyContent: 'left'
                    }}
                  >
                    <a
                      href='https://github.com/stazman'
                      style={{
                        textDecoration: 'none',
                        paddingTop: '4rem',
                        paddingRight: '1.8rem'
                      }}
                    >
                      Github
                    </a>
                  </p>
                </div>
                <div className='grid-item-center'
                  style={{
                    padding: 0,
                    margin: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <img
                    style={{
                      border: '1px solid',        
                      padding: 0,
                      margin: 0,
                      height: 'auto',
                      borderRadius: '50%'
                    }}
                    src={CurrProfPhoto}
                    alt="Christopher DiStasio"
                  />
                </div>
                <div
                  className='grid-item-right'
                  style={{
                    padding: 0,
                    margin: 0
                  }}
                >
                  <p
                    style={{
                      fontSize: '1rem',
                      fontFamily: 'arial',
                      fontWeight: 'bold',
                      color: 'navy',
                      textAlign: 'right',
                      display: 'flex',
                      alignItems: 'right',
                      justifyContent: 'right',
                      paddingRight: 0,
                      marginRight: 0
                    }}
                  >
                    <a
                      href='https://medium.com/commcodia'
                      style={{
                        textDecoration: 'none',
                        paddingTop: '4rem',
                        paddingLeft: '1.8rem'
                      }}
                    >
                      Blog
                    </a>
                  </p>
                  <p
                    style={{
                      fontSize: '1rem',
                      fontFamily: 'arial',
                      fontWeight: 'bold',
                      color: 'navy',
                      textAlign: 'right',
                      display: 'flex',
                      alignItems: 'right',
                      justifyContent: 'right',
                    }}
                  >
                    <a
                      href='https://www.linkedin.com/in/christopher-distasio-8b035444/'
                      style={{
                        textDecoration: 'none',
                        paddingTop: '4rem',
                        paddingLeft: '1.8rem'
                      }}
                    >
                      LinkedIn
                    </a>
                  </p>
                </div>
              </div>
            </div>
  
              <div className="grid-item"
                style={{
                  fontSize: '1rem',
                  fontFamily: 'arial',
                  fontWeight: 'bold',
                  color: 'navy',
                  textAlign: 'center',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingTop: '1rem'
                }}
              >
                <a
                  href='mailto:cadistasio@gmail.com'
                  style={{
                    textDecoration: 'none'
                  }}
                >
                    cadistasio@gmail.com
                </a>
              </div>
  
              <div class="grid-item-line-space"
                style={{
                  fontSize: '1.5rem',
                  fontFamily: 'arial',
                  fontWeight: 'bold',
                  color: 'navy',
                  textAlign: 'center',
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingTop: 0,
                  paddingBottom: '1.5rem',
                  display: 'flex'
                }}
              >
              </div>
  
            </div>
          </div>
  
        <div
          className='flex-item'
          style={{
            display: 'flex',
            width: '34rem'
          }}
        >
          <article
            style={{
              borderWidth: '2px',
              borderStyle: 'solid',
              height: '30rem',
              overflow: 'scroll',
              marginRight: '2rem',
              marginLeft: '3rem',
              marginBottom: '2%'
            }}
          >
            <p
              style={{
                padding: '5%',
                paddingBottom: '2%',
                fontFamily: 'arial',
                fontSize: '20px',
                lineHeight: '120%',
                margin: 0
              }}
            >
              Full-stack web developer experienced in developing apps to address a wide variety of interests and demands, whether it’s trying to stay fit, build a small business, or solve an escape room challenge. Able to solve coding and business challenges quickly, from strong foundational programming skills and effective development processes gained from the Flatiron Software Engineering Bootcamp, freelance clients, and self study, with a commitment to and constant motivation toward lifelong learning.
              <br></br><br></br>
              Focused on the complete needs of users, building on a disposition and passion to care gained from 17 years of working with English as a Second Language students from a diverse range of backgrounds, skill levels, and cultures, often within the same class. Transitioning to web development after seeing how using and developing lessons from web-based tools transformed my classrooms in efficiency and effectiveness. Able to work independently but also used to working among diverse groups of colleagues and performing a variety of roles among them.
              <br></br><br></br>
              Basically, I'm the full package.
              <br></br><br></br>
              AJAX, APIs, Atom, AWS Elastic Beanstalk, back end web developer, Bootstrap, Capybara, cPanel, C#, CSS, Eclipse, ERB, Faraday, front end web developer, Express.js, Gatsby, Git, Github, Heroku, HTML, Java (SE 13), JavaScript, JBoss, jQuery, JSON, JSP, JSTL, Linux, MacOS, MongoDB, .Net, Node.js, OmniAuth, PostgreSQL, Postman, Pry, React, React-Bootstrap, Redux, REST, RSpec, Ruby on Rails, SEO, Servlets, Sessions, Sqlite3, styled-components, TDD, Webpack, WildFly 
            </p>
          </article>
        </div>
  
      </div>
    
    </main> 
  </MediaQueries>
)
 
export default Main