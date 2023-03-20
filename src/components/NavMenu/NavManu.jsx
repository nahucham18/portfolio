import style from './NavMenu.module.css'

const NavMenu = (props) =>{
    
    const scroll = (event) =>{
        props.mostrar(event.target.innerText)
    }

    return (
        <div className={style.container}>
            <ul className={style.menu}>
                <li className={style.li} onClick={scroll} name='about'>About</li>
                <li className={style.li} onClick={scroll} >Skills</li>
                <li className={style.li} onClick={scroll} >Proyectos</li>
                <li className={style.li} onClick={scroll} >Contact</li>
                
            </ul>
        </div>
    )
    
}

export default NavMenu