
import './App.css';

import Nav from './components/Nav/Nav'
import Home from './components/Home/Home'
import About from './components/About/About'  
import Skills from './components/Skills/Skills';
import Proyects from './components/Proyects/Proyects';
import Contacto from './components/Contacto/Contacto';
import Map from './components/Map/Map';
import Footer from './components/Footer/Footer';
import { animateScroll as scroll, scroller} from 'react-scroll'
import { Element } from 'react-scroll'
import BtnInicio from './components/BtnInicio/BtnInicio';



function App() {

  const scrollType = {   duration: 500,   delay: 50,   smooth: true, offset: -10}; // linear “easeInQuint” “easeOutCubic”    offset: -10,};

  // const ancla = (name) =>{
    const backInicio = () =>{
      scroll.scrollToTop();
    }
  //   scroller.scrollTo(name)
  // }

  const mostrar = (elemento) =>{
    scroller.scrollTo(elemento,scrollType)
    // console.log(text)
    
  }

  return (
    <div className="App">
        <Nav mostrar={mostrar}/>  
        <Home/>
        <Element name='About'><About/></Element> 
        <Element name='Skills'><Skills/></Element>
        <Element name='Proyectos'><Proyects/></Element>
        <Element name='Contact'> <Contacto/></Element>
        <BtnInicio backInicio={backInicio}/>
        <Map/>
        <Footer/>
    </div>
  );
}

export default App;
