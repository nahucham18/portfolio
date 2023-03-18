import style from './Nav.module.css'
import {BiMenu} from 'react-icons/bi'

const Nav = () => {
    return(
        <div className={style.container}>
            <nav className={style.nav}>
                
                <span className={style.name}>Nahuel Chamorro</span>
                <BiMenu  className={style.menu}/>
            </nav>
        </div>
    )
}

export default Nav;