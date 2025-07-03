import "./projects.css"

function Projects() {
    return (
        <section id="projects" className="projects">
            <div className="projetos fade-in-section">
                <h2>Projects</h2>
                <div className="projetoLeft fade-in-section">
                    <div className="imagemProjeto ccts fade-in-section"></div>
                    <div className="descricaoProjeto">
                        <h1 className="hD">CCTS</h1>
                        <p className="pD fade-in-section">
                        The Cervical Cancer Tracking System (CCTS) is a web-based solution developed to integrate with existing healthcare systems,
                        providing efficient tracking of cervical cancer cases with a focus on simplified interoperability and centralized data management.
                        This project was developed as the final assignment for the Introduction to Programming course in the Software Engineering program
                        at the Federal University of Goiás (UFG), under the guidance of Professor Jacson Barbosa.
                        </p>
                    </div>
                </div>
                <div className="projetoRight fade-in-section">
                    <div className="descricaoProjeto">
                        <h1 className="hD">KS: Soluções em TI</h1>
                        <p className="pD fade-in-section">Responsive and high-conversion web page development for
                             a company focused on technology solutions, such as maintenance, network infrastructure, and cybersecurity.</p>
                    </div>
                    <div className="imagemProjeto d ks"></div>
                </div>
                <div className="projetoLeft fade-in-section">
                    <div className="imagemProjeto web"></div>
                    <div className="descricaoProjeto">
                        <h1 className="hD">Web Projects</h1>
                        <p className="pD fade-in-section">
                            A collection of web development projects built with React, HTML, and CSS, focusing on modern UI design,
                             API consumption, and DOM manipulation. Ideal for showcasing frontend skills and experimenting with interactive web features.
                        </p>
                    </div>
                </div>
                <div className="projetoRight fade-in-section">
                    <div className="descricaoProjeto">
                        <h1 className="hD">Python Projects</h1>
                        <p className="pD fade-in-section">
                            Python projects focused on scripting, automation, problem solving, and backend logic.
                            Demonstrates how Python can be used to build efficient solutions and automate tasks.
                            Showcases development of core functionalities for various types of applications.
                            Highlights the versatility and practicality of Python in real-world scenarios.
                        </p>
                    </div>
                    <div className="imagemProjeto d py"></div>
                </div>
                <div className="projetoLeft fade-in-section">
                    <div className="imagemProjeto alg"></div>
                    <div className="descricaoProjeto">
                        <h1 className="hD">Algorithms</h1>
                        <p className="pD fade-in-section">
                            Focused on algorithms and data structures, covering essential concepts and problem-solving techniques.
                            Includes implementations of common data structures such as arrays, linked lists, trees, and graphs.
                            Demonstrates algorithmic strategies like sorting, searching, recursion, and dynamic programming.
                            Aims to build strong foundational skills for efficient coding and competitive programming.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects;