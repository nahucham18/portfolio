
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



function App() {

  // const ancla = (name) =>{
    const abajo = () =>{
      scroll.scrollToBottom();
    }
  //   scroller.scrollTo(name)
  // }

  const mostrar = (asd) =>{
    scroller.scrollTo(asd)
    // console.log(text)
    console.log(asd);
  }

  return (
    <div className="App">
        <Nav mostrar={mostrar}/>  
        <span>asd</span>
        <span>asd</span>
        <span>asd</span>
        <span onClick={abajo}>abajo</span>
        <Home/>
        <Element name='About'><About/></Element> 
        <Skills/>
        <Proyects/>
        <Contacto/>
        <Map/>
        <Footer/>
    </div>
  );
}

export default App;
