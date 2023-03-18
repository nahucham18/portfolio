import { Link } from 'react-router-dom'
import Iframe from 'react-iframe'

import style from './Map.module.css'

const Map = () =>{
    return(
        <div className={style.container}>

            <Iframe className={style.iframe} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3101.756444788396!2d-67.8469671!3d-38.975229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x960a235d13d33091%3A0xffd2d29128c68e30!2sIgnacio%20Tort%20Oribe%2096%2C%20Allen%2C%20R%C3%ADo%20Negro!5e0!3m2!1ses-419!2sar!4v1679144245036!5m2!1ses-419!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></Iframe>
        </div>
        
    )
}

export default Map