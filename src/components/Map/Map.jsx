import { Link } from 'react-router-dom'

import style from './Map.module.css'

const Map = () =>{
    return(
        <div className={style.container}>
            <Link to={`https://www.google.com/maps/place/Ignacio+Tort+Oribe+96,+Allen,+R%C3%ADo+Negro/@-38.975229,-67.8469671,17z/data=!3m1!4b1!4m5!3m4!1s0x960a235d13d33091:0xffd2d29128c68e30!8m2!3d-38.975229!4d-67.8469671`}>Ir</Link>
        </div>
    )
}

export default Map