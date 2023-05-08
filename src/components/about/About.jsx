import React from 'react'
import "./about.css"
import Me from "../../assets/Me.jpg"
import pri from "../resumesOriginal/priyanka-dora-Resume.pdf";
import a from "../photo/a.png"
import "../contact/contact.css"
import "../../index.css"
const About = () => {
  console.log(pri)
  return(
   <>

      
   <section class="about section container" id="about">

      <div className="about__info">
       <h4 className="description">
       <h1 className="section__title" id='headyy' style={{fontFamily:"cursive" }}> About me </h1>
        <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=40&pause=500&color=teal&width=700&height=70&lines=HELLO  Welcome.." alt="Typing SVG" id='moving' />
        

        <br>
        </br>
        <div id="newintro">
         
       
        <p id="intro user-detail-intro" >I'm a Full Stack Web Developer with hands-on experience in designing, developing, and maintaining projects. Adept at learning, unlearning, and relearning. Demonstrate the capability of managing clean, elegant, and efficient code. Highly skilled in collaboration, decision-making, and Data Structures & Algorithms.I'm still enthusiastically grabbing on to multiple programming languages, frameworks, and principles that I can add to my skillset.</p>
        
        </div>
       </h4>
       <a href={pri} className="btn btndownload" download
        >Download Resume</a>

      </div>
     

      <div>
         <img src={a} alt="" id='headyyimg' />
      </div>

 
    
   </section>
   </>
  )
  }


export default About