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
            <form className={style.form} action="">
                <input type="text" name='name' placeholder='Type Your Name'/>
                <input type="text" name='email' placeholder='Type Your Email'/>
                <input type="text" name='subject' placeholder='Type Your Subject'/>
                <textarea name="mensaje" id="" placeholder='Type Your Message' rows={'5'}></textarea>
                <input type="submit" value={'Enviar'}/>
                
            </form>
        </div>
    )
}

export default Contacto