import './skills.css'

function Skills() {
    const arraySkills = [{}, {}]
    return (
        <section id="skills">
            <div className="blocoSkills fade-in-section">
                <h1 className='sk'>Skills</h1>
                <p></p>
                <div className="skillBloco fade-in-section">
                    <div className="ternarioSkill">
                        <div className="skill fade-in-section">
                            <img src="" alt="" />
                            <p>React.js</p>
                        </div>
                        <div className="skill fade-in-section">
                            <img src="" alt="" />
                            <p>Go</p>
                        </div>
                        <div className="skill fade-in-section">
                            <img src="" alt="" />
                            <p>Javascript</p>
                        </div>
                    </div>
                    <div className="ternarioSkill fade-in-section">
                        <div className="skill fade-in-section">
                            <img src="" alt="" />
                            <p>Python</p>
                        </div>
                        <div className="skill fade-in-section">
                            <img src="" alt="" />
                            <p>C++</p>
                        </div>
                        <div className="skill fade-in-section">
                            <img src="" alt="" />
                            <p>HTML/CSS</p>
                        </div>
                    </div>
                    <div className="ternarioSkill fade-in-section">
                        <div className="skill fade-in-section">
                            <img src="" alt="" />
                            <p>SQL</p>
                        </div>
                        <div className="skill fade-in-section">
                            <img src="" alt="" />
                            <p>APIs REST</p>
                        </div>
                        <div className="skill fade-in-section">
                            <img src="" alt="" />
                            <p>Git/Github</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;