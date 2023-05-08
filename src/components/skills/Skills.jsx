import React from 'react'
import "./skills.css";
import datas from "./datas";


const Skills = () => {
  return (
    <section  className="skills container section"   id="skills" >
      <h2 className="section__title grid"  style={{fontFamily:"cursive" }}>Tech Stack </h2>
      
    <div className="skills__list grid"> 
      {datas.map(({id,image,p}) => {
       return(
      <div class="skills__card grid skills-card" key={id}>
       <img src={image} alt="" class="skills__img skills-card-img" />
        <p class="skills__name skills-card-name" >{p}</p>
      </div>

       )
      })}
 </div>
    </section>
  )
}

export default Skills