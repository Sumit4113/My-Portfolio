// import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';



export default function Home() {

  return (
    <div className="app" >
            <Navbar />
       
       <div class="block"><Hero /> </div>
       <div class="block"><About /> </div>
       <div class="block"><Skills /> </div>
       <div class="block"><Projects /> </div>
       <div class="block"><Contact /> </div>
    
           <Footer />
      
    </div>
  )
}
