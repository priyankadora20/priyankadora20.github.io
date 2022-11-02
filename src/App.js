import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';
import About from './components/about/About';
import Services from './components/services/Services';
import Resume from './components/resume/Resume';
import Skills from './components/skills/Skills';
import Contact from './components/contact/Contact';
import Testimonials from './components/testimonials/Testimonials';
import Pricing from './components/pricing/Pricing';
import Blog from './components/blog/Blog';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <main>
        
        <Home/>
        <About/>
        <Resume />
        <Services/>
        <Skills />
        <Testimonials/>
        <Pricing />
        <Blog />
        <Contact />
        
      </main>
    </div>
  );
}

export default App;
