import style from './Nav.module.css'

const Nav = () => {
    return(
        <div className={style.container}>
            <nav className={style.nav}>
                <h1>Nahuel Chamorro</h1>
                <div className={style.icon_hamburguesa}></div>
            </nav>
        </div>
    )
}

export default Nav;