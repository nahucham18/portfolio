import style from './Nav.module.css'
import {BiMenu} from 'react-icons/bi'
import { useState } from 'react'
import NavMenu from '../NavMenu/NavManu'


const Nav = (props) => {

    const [ nav, setNav] = useState(false)

    const handleOnClick = () =>{
        nav ? setNav(false) : setNav(true)
        
    }
    
    console.log(nav);
    return(
        <div className={style.container}>
            
            <nav className={style.nav}>
                
                <span className={style.name}>Nahuel Chamorro</span>
                {
                    window.innerWidth < 992
                    ?<BiMenu onClick={handleOnClick} className={style.menu}/>
                    : console.log(window.innerWidth)
                }
            </nav>
                {
                    nav ? <NavMenu mostrar={props.mostrar}/> : console.log('Hay menu para ver')
                }
        </div>
    )
}

export default Nav;