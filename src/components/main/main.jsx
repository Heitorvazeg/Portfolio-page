import Home from './main_comp/home/home';
import Skills from './main_comp/skills/skills';
import Projects from './main_comp/projects/projects';
import Contact from './main_comp/contact/contact';
import './main.css';

function Main() {
    return (
        <main>
            <Home></Home>
            <Skills></Skills>
            <Projects></Projects>
            <Contact></Contact>
        </main>
    )
}

export default Main;