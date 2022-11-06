import React from 'react'
import "./about.css"
import Me from "../../assets/Me.jpg"
import pri from "../resumesOriginal/priyanka-dora-Resume.pdf";



const About = () => {
  console.log(pri)
  return(
   <section className="about container section" id="about">


    
    <div className="about__container grid">
      <div className="about__img" >
      <img src={Me} alt="" />
      <p  className="about__img_name">Priyanka Dora</p>
      </div>

      
      
      
    
    <div className="about__data grid">
      <div className="about__info">
       <h4 className="description">
        
        <a href=""><img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=40&pause=500&color=teal&width=700&height=70&lines=HELLO  Welcome.." alt="Typing SVG" id='moving'/></a>
        

        <br>
        </br>
        <p id="intro">I am Priyanka Dora.
        <br/>

        Full Stack Web Developer with a diverse range of skills including React.js, HTML, CSS, JavaScript, MongoDB, Node.js and Express.
        <br/>
        Always excited to learn and try to implement my creativity in it .</p>
        
       </h4>
       <a href={pri} className="btn" download
        >Download Resume</a>
      </div>
 
    </div>
    </div>
   </section>
  )
  }


export default About