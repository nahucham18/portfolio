import style from './Skills.module.css'

const Skills = () =>{
    return (
        <div className={style.container}>
            <h2>SKILLS</h2>
            <div className={style.all_skills}>
                <div className={style.skill}>
                    <div className={style.skill_up}><h4>HTML & CSS</h4><h4>90%</h4></div>
                    <div className={style.skill_down}></div>
                </div>
                <div className={style.skill}>
                    <div className={style.skill_up}><h4>Sass/Less</h4><h4>90%</h4></div>
                    <div className={style.skill_down}></div>
                </div>
                <div className={style.skill}>
                    <div className={style.skill_up}><h4>Bootstrap</h4><h4>90%</h4></div>
                    <div className={style.skill_down}></div>
                </div>
                <div className={style.skill}>
                    <div className={style.skill_up}><h4>React</h4><h4>90%</h4></div>
                    <div className={style.skill_down}></div>
                </div>
                <div className={style.skill}>
                    <div className={style.skill_up}><h4>Redux</h4><h4>90%</h4></div>
                    <div className={style.skill_down}></div>
                </div>
                <div className={style.skill}>
                    <div className={style.skill_up}><h4>Photoshop</h4><h4>90%</h4></div>
                    <div className={style.skill_down}></div>
                </div>
                <div className={style.skill}>
                    <div className={style.skill_up}><h4>Figma</h4><h4>90%</h4></div>
                    <div className={style.skill_down}></div>
                </div>
            </div>
        </div>
    )
}

export default Skills