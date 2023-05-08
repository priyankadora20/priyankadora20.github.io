import React from 'react'
import "./home.css";
import Me from "../../assets/Me.jpg"
import { HeaderSocials } from './HeaderSocials';



const Home = () => {
  return (
    <>
    
    <section className="home container" id="home" >
      
      <div className="intro">
      
        <img src={Me} alt=""  className='home__img home-img' />
       
        <h1 className="home__name" id="user-detail-name" >Priyanka Dora</h1>
        
        <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=30&pause=500&color=teal&width=600&height=80&lines=I'm+Full+Stack+Developer" alt="Typing SVG" id='moving'/>
        
       <HeaderSocials />
      
      <a href="#contact" className="btn" id='btnC'>Hire Me</a>

      
      </div>

    </section>
    </>
  )
}

export default Home