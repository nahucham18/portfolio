import style from './BtnInicio.module.css'
import {BsFillArrowUpSquareFill} from 'react-icons/bs'

const BtnInicio = (props) =>{
    
    return (
        <div onClick={props.backInicio} className={style.container}>
            <BsFillArrowUpSquareFill className={style.btn_inicio}/>
        </div>
    )
}

export default BtnInicio