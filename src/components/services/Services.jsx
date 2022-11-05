import React from 'react'
import "./services.css";
import monsterIndia from "../../assets/monsterIndia.webp";
import tripvilla from "../../assets/tripvilla.jpg";
import coshedule from "../../assets/coshedule.jpg"


const data =[
  {
    id:1,
    image: monsterIndia,
    title:"Monster India Clone",
    about:"India's one of the largest job search website.And one can find jobs by easy application. Monster India started its operations in 2001 .",
    description :"Tech-Stack : HTML,CSS & JavaScript",
    git:`https://github.com/Pankaj-78278/kaput-boundary-7997`,
    netlify:`https://magical-lollipop-a0ab27.netlify.app/`
  },
  {
    id:2,
    image: tripvilla,
    title:"Tripvilla Clone",
    about:"Largest holiday home rental portal in Asia. Browse your ideal vacation home from over 100000 holiday homes spread across destinations.",
    description :"Tech-Stack : HTML,CSS & JavaScript",
    git:`https://github.com/1301yashraj/fleet-lock-616`,
    netlify:`https://polite-muffin-b118b2.netlify.app/`
  },
  {
    id:3,
    image: coshedule,
    title:"CoShedule Clone",
    about:"CoSchedule Marketing Calendar that lets you plan all your marketing projects and write, schedule, and publish your social messages .",
    description :"Tech-Stack : React.js,redux,chakra-UI",
    git:``,
    netlify:``
  },
  {
    id:3,
    image: coshedule,
    title:"CoShedule Clone",
    about:"CoSchedule Marketing Calendar that lets you plan all your marketing projects and write, schedule, and publish your social messages .",
    description :"Tech-Stack : React.js,redux,chakra-UI",
    git:``,
    netlify:``
  }
]

const Services = () => {
  return <section className='services container section' id="projects">
    <h3 className="section__title">Projects :</h3>

    <div className="services__container grid">
      {data.map (({id,image,title,about,description,git,netlify}) => {
        return(
        <div className='services__card'key={id}>
          <img src={image} alt="" className="services__img"/>
          <h3 className='services__title'>{title}</h3>
          <p className='services__about'>{about}</p>
          <p className='services__description'>{description}</p>
          <a href={git} className='services__github'>
          <button className='services__github-a'>Github
          <i class="fa-brands fa-github"></i>
          </button>
          </a>
          
          <a href={netlify} className='services__netlify'>
          <button className='services__netlify-b' >Netlify
          <i class="fa-solid fa-globe"></i>
          </button>
          </a>
          
          
        </div>
      )
      })}
    </div>
  </section>
}

export default Services