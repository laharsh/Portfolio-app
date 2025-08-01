import React, { useRef } from 'react';
import "./App.css";
import './styles/style.css';
import git from "./assets/images/icon-github.svg";
import web from "./assets/images/icon-frontend-mentor.svg"
import link from "./assets/images/icon-linkedin.svg";
import twi from "./assets/images/icon-twitter.svg";
import p1 from "./assets/images/full stack thumbnail.png";
import p0 from "./assets/images/Smart email thumbnail.png";
import p2 from "./assets/images/comment maker.png";
import p3 from "./assets/images/bootstrap thumbnail-2.png";
import p4 from "./assets/images/Adminops_sec.png";
import cir from "./assets/images/pattern-circle.svg";
import rings from "./assets/images/pattern-rings.svg";

function App() {
  let skills = ["React", "Javascript","CSS", "Node","Express","Mongoose","MongoDB","MySQL","AWS"];
  const contactRef = useRef(null);
  const scrollToContact = () => {
    contactRef.current.scrollIntoView({behavior:'smooth'});
  }
  function redirectGitHub() {
    window.location.href = "https://github.com/laharsh?tab=repositories";
  }


  return (
    <div className="main">
      <div className="main-container">
        <div className="nav">
          <div className="">
            laharshmoturi
          </div>
          <div className="icons">
            <a style={{width: '10%', height:'46%'}} href='https://github.com/laharsh'>
              <img style={{width: '100%', height:'100%'}} src={git} alt=""></img>
            </a>
            <a style={{width: '10%', height:'46%'}} href='https://leetcode.com/u/laharshmoturi/'>
              <img style={{width: '100%', height:'100%'}} src={web} alt=""></img>
            </a>
            <a style={{width: '10%', height:'46%'}} href='https://www.linkedin.com/in/laharsh-moturi-3859b81b3/'>
              <img style={{width: '100%', height:'100%'}} src={link} alt=""></img>
            </a>
            <a style={{width: '10%', height:'46%'}} href='https://x.com/LaharshMoturi'>
              <img style={{width: '100%', height:'100%'}} src={twi} alt=""></img>
            </a>
          </div>
        </div>
        <div className="top-container">
          <div className="heading">
            Nice to meet you!
            <br></br>
            <span>I'm Laharsh</span> Moturi.
          </div> 
          <div className="subheading">
            Based in the USA, I'm a
            full stack developer passionate about building accessible web systems that
            users love.
          </div>
        </div>
        <div className="bottom-container">
          <span onClick={scrollToContact}>CONTACT ME</span>
        </div>
        <div className="image-container">
          <img src={cir}></img>
        </div>
      </div>
      <div className="skills">
        <div className="skill-container">
          {skills.map((item)=>(
            <span className="head">{item}<br></br><span className="sub-head">3+ Years Experience</span></span>
          ))}
        </div>
      </div>
      <div className="projects">
        <div className="proj-header">
          <span>Projects</span>
          <p onClick={scrollToContact}>CONTACT ME</p>
        </div>
        <div className="projects-main">
          <div className="container">
            <img src={p0}></img>
            <a className="overlay-1" style={{textDecoration:'none'}} href='https://smart-email-assistant-mcia.onrender.com/'>VIEW PROJECT</a>
            <a className="overlay-2" style={{textDecoration:'none'}} href='https://github.com/laharsh/Smart-Email-Assistant'>VIEW CODE</a>
            <span>Smart Email Assistant</span>
            <div className="skill-used">
              <p>Machine Learning</p>
              <p>Open AI LLM</p>
              <p>Python</p>
              <p>Fast API</p>
            </div>
          </div>
          <div className="container">
            <img src={p1}></img>
            <a className="overlay-1" style={{textDecoration:'none'}} href='https://fullstack-restaurantae.vercel.app/home'>VIEW PROJECT</a>
            <a className="overlay-2" style={{textDecoration:'none'}} href='https://github.com/laharsh/Franchise-System-App'>VIEW CODE</a>
            <span>FRANCHISE SYSTEM</span>
            <div className="skill-used">
              <p>REACT</p>
              <p>NODE</p>
              <p>EXPRESS</p>
              <p>MYSQL</p>
            </div>
          </div>
          <div className="container">
            <img src={p4}></img>
            <a className="overlay-1" style={{textDecoration:'none'}} href='https://github.com/laharsh/AdminOps-Secure'>VIEW PROJECT</a>
            <a className="overlay-2" style={{textDecoration:'none'}} href='https://github.com/laharsh/AdminOps-Secure'>VIEW CODE</a>
            <span>ADMIN_OPS_SECURE</span>
            <div className="skill-used">
              <p>ACCESS_CONTROL</p>
              <p>MONGOOSE</p>
              <p>PASSPORT</p>
              <p>JWT TOKEN</p>
            </div>
          </div>
          <div className="container">
            <img src={p2}></img>
            <a className="overlay-1" style={{textDecoration:'none'}} href='https://comment-maker.vercel.app/home'>VIEW PROJECT</a>
            <a className="overlay-2" style={{textDecoration:'none'}} href='https://github.com/laharsh/React-Redux-comment-Maker-App'>VIEW CODE</a>
            <span>COMMENT MAKER APP</span>
            <div className="skill-used">
              <p>REACT</p>
              <p>SCSS</p>
              <p>JSON SERVER</p>
            </div>
          </div>
          <div className="container">
            <img src={p3}></img>
            <a className="overlay-1" style={{textDecoration:'none'}} href='https://restaurantae.netlify.app/'>VIEW PROJECT</a>
            <a className="overlay-2" style={{textDecoration:'none'}} href='https://github.com/laharsh/Bootstrap-Restaurant-App'>VIEW CODE</a>
            <span>RESTAURANT APP</span>
            <div className="skill-used">
              <p>BOOTSTRAP</p>
              <p>HTML</p>
              <p>CSS</p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer" ref={contactRef} id="contact">
        <div className="footer-container">
          <div className="footer-left">
            <span>Contact</span>
            <p>I would love to hear about your project and how I could help.
              Please fill in the form,and I'll get back to you as soon as possible.
            </p>
          </div>
          <div className="footer-left">
            <form>
              <div>
                <label htmlFor="name">NAME</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  // value={formData.name}
                  // onChange={handleChange}
                  required
                />
                {/* {errors.name && <span className="error">{errors.name}</span>} */}
              </div>
              <div>
                <label htmlFor="email">EMAIL</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  // value={formData.email}
                  // onChange={handleChange}
                  required
                />
                {/* {errors.email && <span className="error">{errors.email}</span>} */}
              </div>
              <div>
                <label htmlFor="message">MESSAGE</label>
                <input
                  id="message"
                  name="message"
                  // value={formData.message}
                  // onChange={handleChange}
                  required
                />
              </div>
              <button type="submit"><p>SEND MESSAGE</p></button>
            </form>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="">
            laharshmoturi
          </div>
          <div className="footer-icons">
            <a style={{width: '10%', height:'46%'}} href='https://github.com/laharsh'>
              <img style={{width: '100%', height:'100%'}} src={git} alt=""></img>
            </a>
            <a style={{width: '10%', height:'46%'}} href='https://leetcode.com/u/laharshmoturi/'>
              <img style={{width: '100%', height:'100%'}} src={web} alt=""></img>
            </a>
            <a style={{width: '10%', height:'46%'}} href='https://www.linkedin.com/in/laharsh-moturi-3859b81b3/'>
              <img style={{width: '100%', height:'100%'}} src={link} alt=""></img>
            </a>
            <a style={{width: '10%', height:'46%'}} href='https://x.com/LaharshMoturi'>
              <img style={{width: '100%', height:'100%'}} src={twi} alt=""></img>
            </a>
          </div>
        </div>
        <div className="footer-ring">
          <img src={rings} ></img>
        </div>
      </div>
    </div>
  );
}

export default App;
