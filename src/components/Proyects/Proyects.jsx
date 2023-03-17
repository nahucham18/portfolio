import style from './Proyects.module.css'

const Proyects = () => {
    return (
        <div className={style.container}>
            <h4 className={style.title}>Proyectos</h4>
            <div className={style.proyect}>
                <h5>Nombre de Proyecto</h5>
                <img className={style.imagen} src="#" alt="asd" />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis quis temporibus est molestias debitis cupiditate, eos ea modi non dolorem.</p>
            </div>
            <div className={style.proyect}>
                <h5>Nombre de Proyecto</h5>
                <img className={style.imagen} src="#" alt="asd" />
                    <p>Lorem ipsum dolor, sit amet consectetur  adipisicing     elit. Perferendis quis temporibus    est molestias debitis    cupiditate, eos ea modi   non dolorem.</p>
            </div>
            <div className={style.proyect}>
                <h5>Nombre de Proyecto</h5>
                <img className={style.imagen} src="#" alt="asd" />
                    <p>Lorem ipsum dolor, sit amet consectetur  adipisicing     elit. Perferendis quis temporibus    est molestias debitis    cupiditate, eos ea modi   non dolorem.</p>
            </div>
            <div className={style.proyect}>
                <h5>Nombre de Proyecto</h5>
                <img className={style.imagen} src="#" alt="asd" />
                    <p>Lorem ipsum dolor, sit amet consectetur  adipisicing     elit. Perferendis quis temporibus    est molestias debitis    cupiditate, eos ea modi non dolorem.</p>
            </div>
        </div>
    )
}

export default Proyects 