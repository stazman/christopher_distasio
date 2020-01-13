import React from "react"
import Container from "./container"
import CurrProfPhoto from "../images/current-professional-photo.jpg"

const Main = () => (
  <main    
    style={{background: `#efefef`,
      marginTop: `2.5%`,
      padding: 0
    }}
  >
    <div class='row'
      style={{
        maxHeight: '50%'
      }}
    >
      <Container>
        <div
          class='grid-container'
          style={{
            display: 'grid',
            gridTemplateColumns: 'auto',
            marginLeft: '2rem',
            marginTop: 0,
            minWidth: '85%'
          }}
        >
          <div 
            class="grid-item" 
            style={{
              border: 'none',
              fontSize: '18px',
              fontFamily: 'arial',
              textAlign: 'center',
              paddingBottom: '2rem',
              justifyContent: 'center'    
            }}
          >
            <p
              style={{
                fontWeight: 'bold',
                color: 'navy',
                padding: 0,
                marginBottom: '.4rem'
              }}
            >
              Christopher DiStasio,
            </p>
            <p
              style={{
                fontWeight: 'bold',
                color: 'navy',
                padding: 0,
                margin: 0
              }}
            >
              Full-stack Web Developer
            </p>
          </div>
            <div
              style={{     
                display: 'flex',   
                justifyContent: 'center'  
              }}
            >
              <img 
                class="grid-item" 
                style={{
                  border: 'none',         
                  justifyContent: 'center',    
                  padding: 0,
                  margin: 0,
                  height: '72%',
                  width: '50%',
                  borderRadius: '50%'
                }} 
                src={CurrProfPhoto}
                alt="Christopher DiStasio"
              />
            </div>
          <div 
            class="grid-item" 
            style={{
              border: 'none',         
              height: '2rem',
            }}
          >
          </div>
          <div 
            class="grid-item" 
            style={{
              border: 'none',         
              fontSize: '26px',
              fontFamily: 'arial',
              fontWeight: 'bold',
              color: 'navy',
              height: '6.5rem',
              textAlign: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <a 
              href='https://tinyurl.com/sswhzd6'
              style={{
                textDecoration: 'none'
              }}
            >
              Resume
            </a>
          </div>
          <div 
            class="grid-item" 
            style={{
              border: 'none',         
              fontSize: '26px',
              fontFamily: 'arial',
              fontWeight: 'bold',
              color: 'navy',
              height: '6.5rem',
              textAlign: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <a 
              href='https://github.com/stazman?tab=repositories'
              style={{
                textDecoration: 'none'
              }}
            >
              Github
            </a>
          </div>  
          <div 
            class="grid-item" 
            style={{
              border: 'none',         
              fontSize: '26px',
              fontFamily: 'arial',
              fontWeight: 'bold',
              color: 'navy',
              height: '6.5rem',
              textAlign: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <a 
              href='https://medium.com/commcodia'
              style={{
                textDecoration: 'none'
              }}
            >
              Blog
            </a>
          </div>
          <div class="grid-item"
            style={{
              border: 'none',         
              fontSize: '26px',
              fontFamily: 'arial',
              fontWeight: 'bold',
              color: 'navy',
              height: '6.5rem',
              textAlign: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <a 
              href='https://www.linkedin.com/in/christopher-distasio-8b035444/'
              style={{
                textDecoration: 'none'
              }}
            >
              LinkedIn
            </a>
          </div>
          <div class="grid-item"
            style={{
              border: 'none',         
              fontSize: '26px',
              fontFamily: 'arial',
              fontWeight: 'bold',
              color: 'navy',
              height: '6.5rem',
              textAlign: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <a 
              href='mailto:cadistasio@gmail.com'
              style={{
                textDecoration: 'none'
              }}
            >
              Email
            </a>
          </div>
        </div>
      </Container>

      <Container>
        <article 
          style={{
            borderWidth: '2px',
            borderStyle: 'solid',
            height: '65rem',
            overflow: 'scroll',
            marginRight: '2rem',
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

            When I was an English teacher, I constantly sought out ways to make learning more efficient and effective for my students. I used a wide variety of web-based tools and adapted them to make more class-specific tools that students used to maximize their learning.
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

            Since first coming to code,  I’ve developed strong skills as a Flatiron School graduate and as a self-driven learner. From working with freelance clients and developing my own apps and freelance clients, I’ve put into practice my love for code and for helping people achieve their goals. 
            For example, I’ve built a website for a client with a small business, huntshomeservices.com, and I’ve built an app for a special company event with a client, projectmatchplay.com, both through continuous communication with clients about their often changing needs and through using my skills on a deadline. Apps to be deployed include Daily Weight Loss Advisor, which provides a simple but effective interface for helping users develop daily fitness habits.
            <br></br><br></br>

            I loved being a teacher, and the learning and teaching relationships that came from that experience mean a lot to me, and they always will. As with teams of teachers paying attention to the specific parts of a student’s learning that make up a successful learner, I’ve built strong new relationships with other developers.
            <br></br><br></br>
  
            I look forward to working with teams to build and maintain specific parts of a code base to form one working whole experience. And as student’s needs were paramount to me as a teacher, so now are the needs of clients and users. 
          </p> 
        </article>
      </Container>

    </div>
  </main>
)

export default Main
