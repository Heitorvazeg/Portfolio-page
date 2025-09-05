import './skills.css'
function Skills() {
    return (
        <section id="skills">
            <div className="blocoSkills fade-in-section">
                <h1 className='sk'>Skills</h1>
                <div className="skillBloco fade-in-section">
                    <div className="ternarioSkill fade-in-section">
                        <div className="skill fade-in-section" tabIndex="0" role="article" aria-label="React skill">
                            <div className="react imageS" aria-hidden="true"></div>
                            <p className='pS'>React.js</p>
                            <p className='pK'>I have experience developing modern and responsive interfaces with React, using reusable components and hooks to optimize performance.</p>
                        </div>
                        <div className="skill fade-in-section" tabIndex="0" role="article" aria-label="Go skill">
                            <div className="go imageS" aria-hidden="true"></div>
                            <p className='pS'>Go</p>
                            <p className='pK'>I use Go to build fast and efficient APIs, focusing on system scalability.</p>
                        </div>

                        <div className="skill fade-in-section" tabIndex="0" role="article" aria-label="JavaScript skill">
                            <div className="js imageS" aria-hidden="true"></div>
                            <p className='pS'>JavaScript</p>
                            <p className='pK'>I master JavaScript on the frontend, creating dynamic and interactive functionalities with clean and structured code.</p>
                        </div>
                    </div>
                    <div className="ternarioSkill fade-in-section">
                        <div className="skill fade-in-section" tabIndex="0" role="article" aria-label="Python skill">
                            <div className="pyt imageS" aria-hidden="true"></div>
                            <p className='pS'>Python</p>
                            <p className='pK'>I use Python for automation, scripting, and data analysis, taking advantage of its simplicity and power.</p>
                        </div>

                        <div className="skill fade-in-section" tabIndex="0" role="article" aria-label="C++ skill">
                            <div className="c imageS" aria-hidden="true"></div>
                            <p className='pS'>C++</p>
                            <p className='pK'>I have strong command of C++ to solve high-performance problems, with knowledge in complex data structures and algorithms.</p>
                        </div>

                        <div className="skill fade-in-section" tabIndex="0" role="article" aria-label="HTML and CSS skill">
                            <div className="htcs imageS" aria-hidden="true"></div>
                            <p className='pS'>HTML/CSS</p>
                            <p className='pK'>I create well-structured and visually pleasing web pages with HTML and CSS, always focusing on responsiveness and user experience.</p>
                        </div>
                    </div>
                    <div className="ternarioSkill fade-in-section">
                        <div className="skill fade-in-section" tabIndex="0" role="article" aria-label="SQL skill">
                            <div className="sql imageS" aria-hidden="true"></div>
                            <p className='pS'>SQL</p>
                            <p className='pK'>I am skilled at working with relational databases, writing queries for data manipulation and analysis.</p>
                        </div>

                        <div className="skill fade-in-section" tabIndex="0" role="article" aria-label="APIs REST skill">
                            <div className="api imageS" aria-hidden="true"></div>
                            <p className='pS'>APIs REST</p>
                            <p className='pK'>I develop and consume RESTful APIs, ensuring efficient system integration and good endpoint organization.</p>
                        </div>

                        <div className="skill fade-in-section" tabIndex="0" role="article" aria-label="Git and GitHub skill">
                            <div className="gitghub imageS" aria-hidden="true"></div>
                            <p className='pS'>Git/GitHub</p>
                            <p className='pK'>I use Git and GitHub for version control and project collaboration, keeping the history clean and branches well-managed.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;