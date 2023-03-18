import style from './About.module.css'

const About = () =>{
    return(
        <div className={style.container}>
            <img className={style.imagen} src="https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
            <div className={style.first}>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto exercitationem odit ipsum corrupti necessitatibus quaerat eos incidunt molestiae, atque tenetur ad possimus reprehenderit deserunt. Voluptate autem at accusamus quia maiores!</p>

                <span>Phone: +549 2234558286</span>
                <span>E-mail: nahu.chamo19@gmail.com</span>
                <span>Discord: nahucham#3869</span>
            </div>
            
            
            
        </div>
    )
}

export default About;