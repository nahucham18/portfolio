
import './App.css';

import Nav from './components/Nav/Nav'
import Home from './components/Home/Home'
import About from './components/About/About'  
import Skills from './components/Skills/Skills';
import Proyects from './components/Proyects/Proyects';
import Contacto from './components/Contacto/Contacto';
import Map from './components/Map/Map';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
        <Nav/>  
        <Home/>
        <About/>
        <Skills/>
        <Proyects/>
        <Contacto/>
        <Map/>
        <Footer/>
    </div>
  );
}

export default App;
