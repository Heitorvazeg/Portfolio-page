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
                            <div className="react"></div>
                            <p>React.js</p>
                        </div>
                        <div className="skill fade-in-section">
                            <div className="go"></div>
                            <p>Go</p>
                        </div>
                        <div className="skill fade-in-section">
                            <div className="js"></div>
                            <p>Javascript</p>
                        </div>
                    </div>
                    <div className="ternarioSkill fade-in-section">
                        <div className="skill fade-in-section">
                            <div className="py"></div>
                            <p>Python</p>
                        </div>
                        <div className="skill fade-in-section">
                            <div className="c"></div>
                            <p>C++</p>
                        </div>
                        <div className="skill fade-in-section">
                            <div className="htcs"></div>
                            <p>HTML/CSS</p>
                        </div>
                    </div>
                    <div className="ternarioSkill fade-in-section">
                        <div className="skill fade-in-section">
                            <div className="sql"></div>
                            <p>SQL</p>
                        </div>
                        <div className="skill fade-in-section">
                            <div className="api"></div>
                            <p>APIs REST</p>
                        </div>
                        <div className="skill fade-in-section">
                            <div className="gitghub"></div>
                            <p>Git/Github</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;