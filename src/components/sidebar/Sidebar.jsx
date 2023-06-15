import React from 'react';
import "./sidebar.css";
import Me from "../../assets/Me.jpg"
import { Link } from "react-scroll";
import pri from "../resumesOriginal/priyanka-dora-Resume.pdf";


const Sidebar =() =>{
    return (
        <aside className='aside' id="nav-menu" >
            <a href="#home" className="nav__logo">

            <img 
            className="nav__logonew" 
            src={Me} 
            alt="return to top" 
               />
                
            </a>
            
            <nav className='nav'>
                <div className='nav__menu'>
                    <ul className='nav__list'>
                        
                       
                        <li className='nav__item'>
                        
                        <Link 
                        className="nav__link "
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={400}>
                        <i className="icon-home"></i>
                        
                        </Link>
                            

                        <p className="hide">Home</p>
                        </li>

                        <li className='nav__item'>  
                            
                        <Link
                        className="nav__link"
                        to="about"
                         spy={true}
                        smooth={true}
                        offset={-70}
                                duration={400}
                            
                            >
                              

                        <i className="icon-user-following"></i>
                        </Link>
                        <p className="hide">About</p>
                        </li>

                        <li className='nav__item'>  

                        <Link
                        className="nav__link"
                        to="resume"
                         spy={true}
                        smooth={true}
                        offset={-70}
                        duration={400}>
                        <i className="icon-graduation"></i>
                        </Link>
                        <p className="hide">Education</p>
                        </li>

                     <li className='nav__item'>
                        
                    <Link
                        className="nav__link"
                        to="services"
                         spy={true}
                        smooth={true}
                        offset={-70}
                        duration={400}>
                    
                  
                    <i className="icon-briefcase"></i>
                    
                    
                    </Link>
                    <p className="hide">Projects</p>
                    </li>
                  
                    <li className='nav__item'>
                    <Link
                        className="nav__link"
                        to="skills"
                         spy={true}
                        smooth={true}
                        offset={-70}
                        duration={400}>
                    <i className="icon-layers"></i>
                    </Link>
                    <p className="hide">Skills</p>
                    </li>

                    <li className='nav__item'>
                    <Link
                        className="nav__link"
                        to="git"
                         spy={true}
                        smooth={true}
                        offset={-70}
                        duration={400}>
                    <i className="icon-note"></i>
                    
                    </Link>
                    <p className="hide">Github</p>
                    </li>

                    <li className='nav__item'>
                    <Link
                        className="nav__link"
                        to="contact"
                         spy={true}
                        smooth={true}
                        offset={-70}
                        duration={400}>
                       <i className="icon-bubble"></i>
                    
                    </Link>
                    <p className="hide">Contact</p>
                       </li>
                        
                        
                       <li className='nav__item'>
                        
                       <a href={pri} className='nav__link' id='download' download>
                        <i className="icon-link" onClick={
                            ()=>{
                                window.open("https://drive.google.com/file/d/11xSP3xvnaK_HagVd-QEJPeHgcojFmQ5B/view?usp=sharing")
                            }
                        }></i>
                        </a>
                        <p className="hide">Resume</p>
                       </li>
                       

                    </ul>

                </div>

            </nav>
        
       
        </aside>
    )
}


export default Sidebar


