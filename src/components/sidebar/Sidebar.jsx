import React from 'react';
import "./sidebar.css";
import Me from "../../assets/Me.jpg"


const Sidebar =() =>{
    return (
        <aside className='aside'>
            <a href="#home" className="nav__logo">
                <img className="nav__logonew" src={Me} alt="return to top" width="400" height="400"   />
            </a>
            
            <nav className='nav'>
                <div className='nav__menu'>
                    <ul className='nav__list'>
                        
                       <li className='nav__item'>
                        <a href ="#home" className='nav__link'>
                            <i className="icon-home"></i>
                            
                        </a>
                        <p className="hide">Home</p>
                       </li>

                       <li className='nav__item'>
                        <a href ="#about" className='nav__link'>
                        <i className="icon-user-following"></i>
                        
                        </a>
                        <p className="hide">About</p>
                       </li>

                       <li className='nav__item'>
                        <a href ="#resume" className='nav__link'>
                        <i className="icon-graduation"></i>
                        </a>
                        <p className="hide">Education</p>
                       </li>

                       <li className='nav__item'>
                        <a href ="#services" className='nav__link'>
                        <i className="icon-briefcase"></i>

                        </a>
                        <p className="hide">Projects</p>
                       
                       </li>

                      

                       <li className='nav__item'>
                        <a href ="#portfolio" className='nav__link'>
                        <i className="icon-layers"></i>
                        </a>
                        <p className="hide">Skills</p>
                       </li>

                       <li className='nav__item'>
                        <a href ="#blog" className='nav__link'>
                        <i className="icon-note"></i>
                        </a>
                        <p className="hide">Stats</p>
                        
                       </li>

                       <li className='nav__item'>
                        <a href ="#contact" className='nav__link'>
                        <i className="icon-bubble"></i>
                        </a>
                        <p className="hide">contact</p>
                       </li>



                    </ul>

                </div>

            </nav>
        
        <div className="nav__footer">
            <span className='copyright'>Priyanka Dora</span>
        </div>

        </aside>
    )
}

export default Sidebar