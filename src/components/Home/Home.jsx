import { Link } from 'react-router-dom'

import style from './Home.module.css'

const Home = () =>{
    return(
        <div className={style.container}>
            <img className={style.imagen} src="https://images.unsplash.com/photo-1610366398516-46da9dec5931?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=963&q=80" alt="home" />
            <div className={style.home}>
                <h2 className={style.name}>Nahuel Chamorro</h2>
                <p className={style.intro}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla aliquid maiores a fugit facere magnam, animi exercitationem voluptas doloribus ipsam nisi tenetur. Soluta fugiat iure temporibus officia. Qui, odio. Dolore.</p>
                <Link className={style.btn_contacto}>Contacto</Link>
            </div>
        </div>
    )
}

export default Home