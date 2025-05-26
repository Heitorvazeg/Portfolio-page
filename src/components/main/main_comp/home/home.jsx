import './home.css'
import Texting from "../texting";

function Home() {
    return(
        <section className="home">
            <div className="welcome">
                <h3>Welcome to my Portfólio</h3>
            </div>
            <Texting text="HHi! I'm Heitor Vaz, a Software Engineer."></Texting>
            <div className="sobre">
                <img src="" alt="" />
                <p></p>
            </div>
        </section>
    )
}

export default Home;