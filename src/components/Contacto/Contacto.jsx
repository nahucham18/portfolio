import style from './Contacto.module.css'

const Contacto = () =>{
    return(
        <div className={style.container}>
            Contacto
            <div className={style.medios}>
                <div>medio 1</div>
                <div>medio 2</div>
                <div>medio 3</div>
            </div>
            <form action="">
                FORM
                <label htmlFor="username"></label>
            </form>
        </div>
    )
}

export default Contacto