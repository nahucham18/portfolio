import { Link } from 'react-router-dom'

import style from './Home.module.css'

const Home = () =>{
    return(
        <div className={style.container}>
            <div className={style.home}>
            <h2 className={style.name}>Nahuel Chamorro</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla aliquid maiores a fugit facere magnam, animi exercitationem voluptas doloribus ipsam nisi tenetur. Soluta fugiat iure temporibus officia. Qui, odio. Dolore.</p>
            <Link>Contacto</Link>
            </div>
        </div>
    )
}

export default Home