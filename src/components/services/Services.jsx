import React from 'react'
import "./services.css";
import monsterIndia from "../../assets/monsterIndia.webp";
import tripvilla from "../../assets/tripvilla.jpg";
import coshedule from "../../assets/coshedule.jpg"
import kitchen from "../../assets/kitchen.png"
import b from "../photo/b.png"
const data =[
  {
    id:1,
    image: monsterIndia,
    title:"Monster India Clone",
    about:"India's one of the largest job search website.And one can find jobs by easy application. Monster India started its operations in 2001 .",
    description :"TechStack : HTML, CSS, Flikity & JavaScript",
    git:`https://github.com/Pankaj-78278/kaput-boundary-7997`,
    netlify:`https://magical-lollipop-a0ab27.netlify.app/`
  },
  {
    id:2,
    image: tripvilla,
    title:"Tripvilla Clone",
    about:"Largest holiday home rental portal in Asia. Browse your ideal vacation home from over 100000 holiday homes spread across destinations.",
    description :"TechStack : HTML, CSS & JavaScript",
    git:`https://github.com/priyankadora20/tripvilla-cloned-website#readme`,
    netlify:`https://eloquent-treacle-aba50e.netlify.app/`
  },
  {
    id:4,
    image: kitchen,
    title:"Kitchen Corner",
    about:"KindMeal.my is Malaysia's leading meat-free lifestyle platform , indulging you with delicious discounted vegetarian meals to save animals, health",
    description :"TechStack : React.js, Redux, Chakra-UI , Node.js",
    git:`https://github.com/priyankadora20/punchy-substance-1301#readme`,
    netlify:`https://blessed-toes-567-ten.vercel.app/`
  }
  ,
  {
    id:5,
    image: b,
    title:"GadgetStop",
    about:"GeekBuying is one of the leading E-commerce websites delivering a wide range of consumer technology across the globe.",
    description :"TechStack : React.js,Redux,Chakra-UI, CSS ,MongoDb, Mongoose ",
    git:`https://github.com/priyankadora20/blessed-toes-567#readme`,
    netlify:`https://super-belekoy-306029.netlify.app/`
  }
  
  
]

const Services = () => {

  
  return <section className='services container section' id="projects">
    <h3 className="section__title"
    style={{fontFamily:"cursive" }} id="heado" >Projects </h3>

    <div className="services__container grid">
      {data.map (({id,image,title,about,description,git,netlify}) => {
        return(
        <div class='services__card project-card 'key={id} >
          <img src={image} alt="" className="services__img"/>
          <h2 class='services__title project-title'>{title}</h2>
          <div className='ptagabout'>
          <p class='services__about project-description'>{about}</p>
          <p class='services__description project-tech-stack'>{description}</p>
          </div>
          <a href={git} class='services__github project-github-link' target="_blank" >
          
          <i class="fa-brands fa-github fa-gitgit" id='fa-github' ></i>
          
          </a>
          
          <a href={netlify} class='services__netlify project-deployed-link' target="_blank">
          
          <i class="fa-solid fa-globe"></i>
         
          </a>
          
          
        </div>
      )
      })}
    </div>
  </section>
}

export default Services
