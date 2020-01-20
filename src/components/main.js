import React from "react"
import CurrProfPhoto from "../images/best-professional-photo.jpg"

const Main = () => (
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
          margin: 0,
          padding: 0
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
                    href='https://tinyurl.com/rsna3yz'
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
          width: '34rem',
          height: '100%'
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
            I didn’t start out my adult life as a web developer, but now I know what I was missing.
            <br></br><br></br>

            When I was an English teacher, I constantly sought out ways to make learning more efficient and effective for my students. I used a wide variety of web-based tools and adapted them to make more className-specific tools that students used to maximize their learning.
            <br></br><br></br>

            But then I fell in love with coding. 
            <br></br><br></br>

            Through web development, I can and do give the same attention to detail I did when I was a teacher. I can create my own tools for the functional, expressive, and aesthetic needs of the user and even create new experiences for them.
            <br></br><br></br>

            Performing as a web developer is not just about aiming to make certain processes more efficient, it’s focused on efficiency itself. I can engage the same penchant for solving problems as I did when I was a teacher, but now I can see the results of the solutions, as well as test those solutions and the improvements they make, right away. 
            <br></br><br></br>

            Coding allows me to use my skill set even more fully. And through developing websites and software, I can reach an even greater number of people with a greater diversity of interests and needs. 
            <br></br><br></br>

            And then there’s the constant learning, but with the ability — in fact, the need — to apply that learning right away as well. Web development allows me to focus on the structural complexities of programs and processes, one complexity at a time, one simplicity that makes up that complexity, at a time.
            <br></br><br></br>

            Since first coming to code,  I’ve developed strong skills as a Flatiron School graduate and as a self-driven learner. From working with freelance clients and developing my own apps, I’ve put into practice my love for code and for helping others achieve their goals.
            <br></br><br></br>

            For example, I’ve built a website for a client with a small business, huntshomeservices.com, and I’ve built an app for a special company event with a client, projectmatchplay.com, both through continuous communication with clients about their often changing needs and through using my skills on a deadline. Apps to be deployed include Daily Weight Loss Advisor, which provides a simple but effective interface for helping users develop daily fitness habits.
            <br></br><br></br>

            I loved being a teacher, and the learning and teaching relationships that came from that experience mean a lot to me, and they always will. As I did with many teaching colleagues, I’ve built strong new relationships with other developers.
            <br></br><br></br>
  
            I look forward to working with teams to build and maintain specific parts of a code base to form one  whole experience. And as student’s needs were paramount to me as a teacher, so now are the needs of clients and users. 
          </p> 
        </article>
      </div>

    </div>
  
  </main>  
)

export default Main