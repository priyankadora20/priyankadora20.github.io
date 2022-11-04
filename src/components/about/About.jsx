import React from 'react'
import "./about.css"
import Me from "../../assets/Me.jpg"
import pri from "../resumesOriginal/priyanka-dora-Resume.pdf";

const About = () => {
  console.log(pri)
  return(
   <section className="about container section" id="about">

    <h2 className="section_title">About Me :</h2>




    <div className="about__container grid">
      <div className="about__img" >
      <img src={Me} alt="" />
      <p  className="about__img_name">Priyanka Dora</p>
      </div>
      
      
    
    <div className="about__data grid">
      <div className="about__info">
       <h4 className="description">
        <h3> Hello !!</h3>
      
        <br>
        </br>
        I am Priyanka Dora
        , Full stack developer having a diverse range of skills including React.js ,HTML ,CSS ,javascript ,MongoDB ,Node.js and Express . Very Enthusiatic to learn and try to implement my creativity in it .
        
       </h4>
       <a href={pri} className="btn" download >Download Resume</a>
      </div>
    </div>
    </div>
   </section>
  )
  }


export default About