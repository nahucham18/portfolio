import style from './Contacto.module.css'
import {ImWhatsapp} from "react-icons/im";
import {FiHome} from "react-icons/fi";
import { HiOutlineMailOpen } from 'react-icons/hi';


const Contacto = () =>{
    return(
        <div className={style.container}>
            CONTACT US
            <div className={style.medios}>
                <div className={style.medio}>
                <ImWhatsapp className={style.icon_medio} />
                    <div className={style.info_contact}>
                        <span>Call Us</span>
                        <p>+549 2234558286</p>
                    </div>

                </div>

                <div className={style.medio}>
                    <FiHome className={style.icon_medio}/>
                    <div className={style.info_contact}>
                        <span>Visit Us</span>
                        <p>Prov. Rio Negro</p>
                    </div>
                    
                </div>
                <div className={style.medio}>
                <HiOutlineMailOpen className={style.icon_medio}/>
                
                    <div className={style.info_contact}>
                        <span>Email Us</span>
                        <p>nahu. chamo19@gmail.com</p> 
                    </div>   
                </div>
            </div>
            <form className={style.form} action="">
                <input className={style.input} type="text" name='name' placeholder='Type Your Name'/>
                <input className={style.input} type="text" name='email' placeholder='Type Your Email'/>
                <input className={style.input} type="text" name='subject' placeholder='Type Your Subject'/>
                <textarea className={style.input_area} name="mensaje" id="" placeholder='Type Your Message' rows={'5'}></textarea>
                <input className={style.btn} type="submit" value={'Enviar'} />
                
            </form>
        </div>
    )
}

export default Contacto