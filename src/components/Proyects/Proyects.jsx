import style from './Proyects.module.css'

const Proyects = () => {
    return (
        <div className={style.container}>
            <h4 className={style.title}>Proyectos</h4>
            <div className={style.proyect}>
                <h3>Api Rick And Morty</h3>
                <img className={style.imagen} src="#" alt="asd" />
                <p>La api de Rick & Morty, es una web que interactua con los persojanes del mundo de Rick y Morty, mostrando informacion detallada de 826 personajes en total</p>
            </div>
            <div className={style.proyect}>
                <h3>Copia de Pagina de Harlem</h3>
                <img className={style.imagen} src="#" alt="asd" />
                    <p>Es ejemplo de clonado de la pagina de "Harlem altas burgas", una pagina de pedidos de hamburguesas, mas adelante estare viendo en hacerle mejoras ya en si de la misma página</p>
            </div>
            <div className={style.proyect}>
                <h3>Copia de Pagina de Fridevi</h3>
                <img className={style.imagen} src="#" alt="asd" />
                    <p>Es otro ejemplo de un cloado de una página , en este ejeplo seria de el frigorifico Fridevi</p>
            </div>
            <div className={style.proyect}>
                <h3>Nombre de Proyecto</h3>
                <img className={style.imagen} src="#" alt="asd" />
                    <p>Lorem ipsum dolor, sit amet consectetur  adipisicing     elit. Perferendis quis temporibus    est molestias debitis    cupiditate, eos ea modi non dolorem.</p>
            </div>
        </div>
    )
}

export default Proyects 