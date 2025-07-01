import './home.css'
import Texting from "../texting";

function Home() {
    return(
        <section id="home" className="home">
            <div className="welcome">
                <h3>Welcome to my Portfólio</h3>
            </div>
            <div className='textingDiv'>
                <Texting text="HHi! I'm Heitor Vaz, a Software Engineer."></Texting>
            </div>
            <div className="sobre">
                <div className='pDiv fade-in-section'>
                    <p className='p fade-in-section'>I am a Full-Stack Developer and a Software Engineering student at the Federal University of Goiás.
                        I have hands-on experience in web application development, with a strong focus on solving complex problems and building scalable solutions.
                        My background includes participation in Hackathons and Programming Competitions,
                        which sparked my interest in algorithms, optimization, and software engineering best practices.</p>
                </div>
                <div className="atomo fade-in-section"/>
            </div>
        </section>
    )
}

export default Home;